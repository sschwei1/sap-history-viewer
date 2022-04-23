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

  return {
    token: await generateToken(),
    name: userName,
    validUntil: date
  };
})).then(entries => {
  // so code highlighting wont complain
  entries = entries.map(e => ({
    token: e.token,
    name: e.name,
    validUntil: e.validUntil
  }));

  prisma.access_token.createMany({data: entries}).then(res => {
    console.log(`[access_token] Successfully added entries!`, res)
  }).catch(ex => {
    console.log(`[access_token] Failed to add entries!`, ex);
  });
});