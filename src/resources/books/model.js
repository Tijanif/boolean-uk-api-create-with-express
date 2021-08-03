const db = require('../../utils/database');
const { buildBooksDatabase } = require('../../utils/mockData');

function Book() {
  function createTable() {
    const sql = `
      DROP TABLE IF EXISTS books;
      
      CREATE TABLE IF NOT EXISTS books (
        id              SERIAL        PRIMARY KEY,
        title           VARCHAR(255)   NOT NULL,
        type            VARCHAR(255)   NOT NULL,
        author          VARCHAR(255)   NOT NULL,
        topic           VARCHAR(255)   NOT NULL,
        publicationDate DATE           NOT NULL
      );
    `;

    db.query(sql)
      .then((result) => console.log('[DB] Book table ready.'))
      .catch(console.error);
  }

  function mockData() {
    const createBook = `
      INSERT INTO books
        (title, type, author, topic, publicationDate)
      VALUES
        ($1, $2, $3, $4, $5)
    `;

    const books = buildBooksDatabase();

    books.forEach((book) => {
      db.query(createBook, Object.values(book)).catch(console.error);
    });
  }

  const findAllBooks = (callback) => {
    const sql = `
      SELECT * FROM books 
      `;

    db.query(sql).then((result) => {
      callback(result.rows);
    });
  };
  const findOneBook = (bookId, callback) => {
    const sql = `
    SELECT * FROM books 
    WHERE id = ($1)
    `;

    db.query(sql, [bookId]).then((result) => {
      callback(result.rows[0]);
    });
  };

  const createAbook = (newbook, callback) => {
    const { title, type, author, topic, publicationdate } = newbook;

    const sql = `
    INSERT INTO books (title, type, author, topic, publicationdate)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `;

    db.query(sql, [title, type, author, topic, publicationdate]).then(
      (result) => {
        callback(result.rows[0]);
      }
    );
  };

  createTable();
  mockData();

  return {
    findAllBooks,
    findOneBook,
    createAbook,
  };
}

module.exports = Book;
