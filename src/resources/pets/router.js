const express = require('express');

const petsRouter = express.Router();
const { findAll, findOne } = require('./controller');

petsRouter.get('/', findAll);

petsRouter.get('/:id', findOne);

module.exports = petsRouter;
