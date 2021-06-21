import {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  readAllanimals,
  readOneAnimal,
  readAnimalsByOwner
} from "../repositories/animal.repository.js";

async function createOneAnimal(req, res) {
  const name = await req.body.name;
  const type = await req.body.type;
  const ownerId = await req.body.ownerId;
  const result = await createAnimal(name, type, ownerId);
  res.status(200).send(result);
}

async function updateOneAnimal(req, res) {
  const animalId = await req.body.animalId;
  const name = await req.body.name;
  const type = await req.body.type;
  const ownerId = await req.body.ownerId;
  const result = await updateAnimal(animalId, name, type, ownerId);
  res.status(200).send(result);
}

async function deleteOneAnimal(req, res) {
  const animalId = await req.params.animalId;
  const result = await deleteAnimal(animalId);
  res.status(200).send(result);
}

async function getAllAnimals(req, res) {
  const result = (await readAllanimals()).rows;
  res.status(200).send(result);
}

async function getOneAnimal(req, res) {
  const animalId = await req.params.animalId;
  const result = (await readOneAnimal(animalId)).rows;
  res.status(200).send(result);
}

async function getAnimalsByOwner(req, res) {
  const ownerId = await req.params.ownerId;
  const result = (await readAnimalsByOwner(ownerId)).rows;
  res.status(200).send(result);
}

export {
  createOneAnimal,
  updateOneAnimal,
  deleteOneAnimal,
  getAllAnimals,
  getOneAnimal,
  getAnimalsByOwner
}