// No need to import the Book model just the db

const Book = require('./model');

const { findAllBooks, findOneBook, createAbook } = Book();

function findAll(req, res) {
  findAllBooks((books) => {
    res.json({ books });
  });
}

const findOne = (req, res) => {
  const { id } = req.params;

  findOneBook(Number(id), (book) => {
    res.json({ book });
  });
};

const createOneBook = (req, res) => {
  const newBook = req.body;
  createAbook(newBook, (createdBook) => {
    res.json({ Book: createdBook });
  });
};

module.exports = {
  findAll,
  findOne,
  createOneBook,
};
