require('dotenv').config();

const Koa = require('koa');
const proxy = require('koa-proxy');
const Router = require('@koa/router');
const bodyParser = require('koa-body');

const app = new Koa();
const router = new Router();

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

router.get('/api/test', async (ctx) => {
  const params = ctx.request.query;
  console.log('params', params);
  ctx.body = 'get test success'
});

router.post('/api/test', async (ctx) => {
  const params = ctx.request.body;
  console.log('params', params);

  ctx.body = 'post test success';
})

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(proxy({
    host: process.env.PROXY
  }));


console.log('Starting server...');
app.listen(4000);
console.log('Server running');