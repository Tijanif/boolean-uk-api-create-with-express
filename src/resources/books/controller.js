// No need to import the Book model just the db

const Book = require('./model');

const { findAllBooks, findOneBook } = Book();

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

module.exports = {
  findAll,
  findOne,
};
