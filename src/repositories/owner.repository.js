import { connectElephantSQL } from '../connection/elephantSql.js';

async function createOwner(name, phone) {
  const conn = await connectElephantSQL();
  try {
    const sqlQuery =
      "INSERT INTO proprietarios (nome, telefone) VALUES" +
      "($1, $2);";
    const values = [name, phone];
    const result = await conn.query(sqlQuery, values);
    return result.rows[0]
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function updateOwner(ownerId, name, phone) {
  const conn = await connectElephantSQL();
  try {
    const sqlQuery = "UPDATE proprietarios SET " +
      "nome = $1::name, " +
      "telefone = $2::name " +
      "WHERE proprietario_id = $3::integer;"
    const values = [name, phone, ownerId];
    const result = await conn.query(sqlQuery, values);
    return result.rows[0]
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function deleteOwner(ownerId) {
  const conn = await connectElephantSQL();
  try {
    const sqlQuery = "DELETE FROM proprietarios " +
      "WHERE proprietario_id = $1::integer;"
    const values = [ownerId];
    const result = await conn.query(sqlQuery, values);
    return result.rows[0]
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function readAllOwners() {
  const conn = await connectElephantSQL();
  try {
    const sqlQuery = "SELECT * FROM proprietarios"
    const result = await conn.query(sqlQuery);
    return result
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function readOneOwner(ownerId) {
  const conn = await connectElephantSQL();
  try {
    const sqlQuery = "SELECT * FROM proprietarios WHERE proprietario_id = $1::integer"
    const values = [ownerId];
    const result = await conn.query(sqlQuery, values);
    return result
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

export {
  createOwner,
  updateOwner,
  deleteOwner,
  readAllOwners,
  readOneOwner
}
