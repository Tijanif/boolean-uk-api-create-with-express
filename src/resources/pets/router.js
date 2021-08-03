const express = require('express');

const petsRouter = express.Router();
const { findAll } = require('./controller');

petsRouter.get('/', findAll);

module.exports = petsRouter;
