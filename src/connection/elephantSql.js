import pg from 'pg';

async function connectElephantSQL() {
  var connectionString = "postgres://hboekufa:FJdIRh6RAqx7GS0BCFZdNyVp1wve4XvD@tuffi.db.elephantsql.com/hboekufa";

  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString
  });
  global.connection = pool;

  return pool.connect().then(()=>{console.log('🔌 Conectado ao 🐘 SQL')});
}

export {
  connectElephantSQL
}