const ah = require('./argHelper.js');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const arguments = [
  { key: 'username', required: true, value: undefined, converter: ah.parseUsername }
];

ah.initArguments(arguments);

async function checkIfTokenExists(token) {
  const dbResult = await prisma.access_token.findFirst({
    where: {
      token: token
    }
  });

  return dbResult != null;
}

async function generateToken() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 16;
  let token;

  do {
    token = '';

    for (let i = 0; i < length; i++) {
      const randomPos = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomPos);
    }
  } while(await checkIfTokenExists(token));

  return token;
}

const userNames = ah.getArgByKey(arguments, 'username').value;

Promise.all(userNames.map(async userName => {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + 1);

  const user = await prisma.access_token.findFirst({
    where: {
      name: userName
    }
  });

  return {
    id: user?.id,
    token: await generateToken(),
    name: userName,
    validUntil: date
  };
})).then(async entries => {
  const newUser = entries.filter(el => !el.id)
    .map(e => ({
      token: e.token,
      name: e.name,
      validUntil: e.validUntil
    }));

  const existingUser = entries.filter(el => el.id)
    .map(el => ({
      id: el.id,
      token: el.token,
      name: el.name,
      validUntil: el.validUntil
    }));

  await prisma.access_token.createMany({data: newUser}).then(res => {
    console.log(`[access_token] Successfully created ${res.count} new tokens!`);
    console.log('----------');
    console.log(newUser.map(el => `${el.token} => ${el.name}`).join('\n') + '\n');
  }).catch(ex => {
    console.log(`[access_token] Failed to add entries!`, ex);
  });

  console.log('[access_token] Updated tokens');
  console.log('----------');
  for(const user of existingUser) {
    const usr = await prisma.access_token.update({
      where: {
        id: user.id
      },
      data: {
        token: user.token,
        validUntil: user.validUntil
      }
    });
    console.log(`${usr.token} => ${usr.name}`)
  }

  console.log('\n');
});