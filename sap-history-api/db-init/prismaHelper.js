const tableData = require('./data');

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function fillTable(tableName) {
  await prisma[tableName].createMany({
    data: tableData[tableName + 'Table'],
    skipDuplicates: true
  }).then(res => {
    console.log(`[${tableName}] Successfully added entries!`, res)
  }).catch(ex => {
    console.log(`[${tableName}] Failed to add entries!`, ex);
  });
}

async function clearTable(tableName) {
  await prisma[tableName].deleteMany({}).then(res => {
    console.log(`[${tableName}] Successfully cleared table!`, res)
  }).catch(ex => {
    console.log(`[${tableName}] Failed to clear table!`, ex);
  });
}

module.exports = {
  fillTable,
  clearTable
}