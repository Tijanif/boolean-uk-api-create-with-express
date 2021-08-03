// No need to import the Book model just the db

const Book = require('./model');

const { findOneBook } = Book();

function findAll(req, res) {
  res.json({ Books: 'All the books in the world' });
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
