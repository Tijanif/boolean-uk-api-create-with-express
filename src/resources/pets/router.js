const express = require('express');

const petsRouter = express.Router();
const { findAll, findOne, creatOne } = require('./controller');

petsRouter.get('/', findAll);

petsRouter.get('/:id', findOne);

petsRouter.post('/', creatOne);

module.exports = petsRouter;
