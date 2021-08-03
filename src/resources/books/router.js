const express = require('express');

const booksRouter = express.Router();

const { findOne, findAll } = require('./controller');

booksRouter.get('/', findAll);

booksRouter.get('/:id', findOne);

module.exports = booksRouter;
