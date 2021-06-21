import express from 'express'
import bodyParser from 'body-parser'

const serve = express();
serve.use(bodyParser.json())
serve.use(bodyParser.urlencoded({ extended: true }))

import { createOneOwner, updateOneOwner, deleteOneOwner, getAllOwners, getOneOwner } from "../services/owner.service.js";
import { createOneAnimal, updateOneAnimal, deleteOneAnimal, getAllAnimals, getOneAnimal, getAnimalsByOwner } from "../services/animal.service.js";

// Rotas dos proprietários
serve.post('/proprietario', (req, res) => {
  return createOneOwner(req, res)
})
serve.put('/proprietario', (req, res) => {
  return updateOneOwner(req, res)
})
// Falta verificar se há animais
serve.delete('/proprietario/:ownerId', (req, res) => {
  return deleteOneOwner(req, res)
})
serve.get('/proprietario', (req, res) => {
  return getAllOwners(req, res)
})
serve.get('/proprietario/:ownerId', (req, res) => {
  return getOneOwner(req, res)
})


// Rotas dos animais
serve.post('/animal', (req, res) => {
  return createOneAnimal(req, res)
})
serve.put('/animal', (req, res) => {
  return updateOneAnimal(req, res)
})
serve.delete('/animal/:animalId', (req, res) => {
  return deleteOneAnimal(req, res)
})
serve.get('/animal', (req, res) => {
  console.log(req)
  return getAllAnimals(req, res)
})
serve.get('/animal/:animalId', (req, res) => {
  return getOneAnimal(req, res)
})
serve.get('/animalsByOwner/:ownerId', (req, res) => {
  return getAnimalsByOwner(req, res)
})

export {
  serve
}
