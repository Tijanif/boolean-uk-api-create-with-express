// No need to import the Book model just the db

const Book = require('./model');

const { findOneBook } = Book();

function findAll(req, res) {
  res.json({ products: 'More than you can buy!' });
}

const findOne = (req, res) => {
  const { id } = req.params;

  findOneBook(Number(id), (book) => {
    res.json({ book });
  });
};

module.exports = {
  findOne,
  findAll,
};
