import { connectElephantSQL } from '../connection/elephantSql.js';

async function createAnimal(name, type, ownerId) {
  const conn = await connectElephantSQL();
  try {
    const sqlQuery =
      "INSERT INTO animais (nome, tipo, proprietario_id) VALUES" +
      "($1, $2, $3);";
    const values = [name, type, ownerId];
    const result = await conn.query(sqlQuery, values);
    return result.rows[0]
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function updateAnimal(animalId, name, type, ownerId) {
  const conn = await connectElephantSQL();
  try {
    const sqlQuery = "UPDATE animais SET " +
      "nome = $1::name, " +
      "tipo = $2::name, " +
      "proprietario_id = $3::integer " +
      "WHERE animal_id = $4::integer;"
    const values = [name, type, ownerId, animalId];
    const result = await conn.query(sqlQuery, values);
    return result.rows[0]
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function deleteAnimal(animal_id) {
  const conn = await connectElephantSQL();
  try {
    const sqlQuery = "DELETE FROM animais " +
      "WHERE animal_id = $1::integer;"
    const values = [animal_id];
    const result = await conn.query(sqlQuery, values);
    return result.rows[0]
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function readAllanimals() {
  const conn = await connectElephantSQL();
  try {
    const sqlQuery = "SELECT * FROM animais"
    const result = await conn.query(sqlQuery);
    return result
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function readOneAnimal(animalId) {
  const conn = await connectElephantSQL();
  try {
    const sqlQuery = "SELECT * FROM animais WHERE animal_id = $1::integer"
    const values = [animalId];
    const result = await conn.query(sqlQuery, values);
    return result;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function readAnimalsByOwner(ownerId) {
  const conn = await connectElephantSQL();
  try {
    const sqlQuery = "SELECT * FROM animais WHERE proprietario_id = $1::integer"
    const values = [ownerId];
    const result = await conn.query(sqlQuery, values);
    return result;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

export {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  readAllanimals,
  readOneAnimal,
  readAnimalsByOwner
}
