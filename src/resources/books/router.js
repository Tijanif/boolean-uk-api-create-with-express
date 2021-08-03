const express = require('express');

const booksRouter = express.Router();

const { findOne, findAll, createOneBook } = require('./controller');

booksRouter.get('/', findAll);

booksRouter.get('/:id', findOne);

booksRouter.post('/', createOneBook);

module.exports = booksRouter;
