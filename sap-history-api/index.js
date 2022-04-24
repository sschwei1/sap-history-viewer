require('dotenv').config();

const Koa = require('koa');
const proxy = require('koa-proxy');
const Router = require('@koa/router');
const bodyParser = require('koa-body');
const { PrismaClient } = require("@prisma/client");

const app = new Koa();
const router = new Router();
const prisma = new PrismaClient();

async function getAuth(headers) {
  const authHeader = headers['x-auth'];
  if(!authHeader) return null;

  return prisma.access_token.findFirst({
    where: {
      token: authHeader
    }
  });
}

router.use('/api', async (ctx, next) => {
  console.log('--------------');
  const bodySchema = {payload: null, error: null};

  try {
    await next();
    bodySchema.payload = ctx.body;
  } catch(e) {
    bodySchema.error = e;
    console.log('error', e)
  }

  ctx.body = bodySchema;
});

router.use('/api/wAuth', async (ctx, next) => {
  const headers = ctx.request.headers;
  const auth = await getAuth(headers);

  if(!auth || auth.validUntil < new Date()) {
    throw 'Not Authorized';
  }

  ctx.request.auth = auth;
  await next();
});

router.get('/api/test', async (ctx) => {
  const params = ctx.request.query;
  console.log('params', params);
  ctx.body = 'get test success'
});

router.post('/api/test', async (ctx) => {
  const params = ctx.request.body;
  console.log('params', params);

  ctx.body = 'post test success';
});

router.put('/api/wAuth/game', async (ctx) => {
  console.log('hello from api');

  const gameData = ctx.request.body;

  const game = await prisma.game.create({
    data: {
      roundEnded: gameData.roundEnded,
      healthLeft: gameData.healthLeft,
      win: gameData.win,
      petWentForId: gameData.petWentForId,
      packId: gameData.packId
    },
    include: {
      pet: true
    }
  });

  console.log('game', game);

  const pets = gameData.petsUsed.map((el, i) => ({
    ...el,
    position: i + 1,
    gameId: game.id
  }));

  const pwsResponse = await prisma.pet_with_stats.createMany({
    data: pets
  });

  await prisma.creation_log.create({
    data: {
      gameId: game.id,
      accessTokenId: ctx.request.auth.id,
      message: `Successfully created game searching for ${game.pet.name} with a total of ${pwsResponse.count} pets used!`
    }
  })

  ctx.body = 'Successfully inserted game';
});

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

if(process.env.ENVIRONMENT === 'dev') {
  console.log('Adding proxy...');
  app.use(proxy({
    host: process.env.PROXY
  }));
}


console.log('Starting server...');
app.listen(4000);
console.log('Server running');