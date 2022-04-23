const ph = require('./prismaHelper.js');

// would be nice if there would be a upsertMany functionality (create or update)
// for now clear tables in reverse order and re-fill it
async function fillTables(tables) {
  console.log('\nStart delete tables');
  console.log('----------');
  for(let i = tables.length - 1; i >= 0; i--) {
    const tableName = tables[i];
    await ph.clearTable(tableName);
  }

  console.log('\nStart fill tables');
  console.log('----------');

  for(let i = 0; i < tables.length; i++) {
    const tableName = tables[i];
    await ph.fillTable(tableName);
  }
}

const tables = ['pack', 'tier', 'food', 'foodPack', 'pet', 'petPack'];
fillTables(tables).then();