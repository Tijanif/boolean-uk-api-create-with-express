const db = require('../../utils/database');
const { buildAnimalDatabase } = require('../../utils/mockData');

function Pet() {
  function createTable() {
    const sql = `
      DROP TABLE IF EXISTS pets;

      CREATE TABLE IF NOT EXISTS pets (
        id        SERIAL        PRIMARY KEY,
        name      VARCHAR(255)   NOT NULL,
        age       INTEGER       NOT NULL,
        type      VARCHAR(255)   NOT NULL,
        breed     VARCHAR(255)   NOT NULL,
        microchip BOOLEAN       NOT NULL
      );
    `;

    db.query(sql)
      .then((result) => console.log('[DB] Pet table ready.'))
      .catch(console.error);
  }

  function mockData() {
    const createPet = `
      INSERT INTO pets
        (name, age, type, breed, microchip)
      VALUES
        ($1, $2, $3, $4, $5)
    `;

    const pets = buildAnimalDatabase();

    pets.forEach((pet) => {
      db.query(createPet, Object.values(pet));
    });
  }

  const findAllPets = (callback) => {
    const sql = `
    SELECT * from pets;
    `;
    db.query(sql).then((result) => {
      callback(result.rows);
    });
  };

  const findOnePet = (petId, calback) => {
    const sql = `
    SELECT * FROM pets
    WHERE id = ($1);
    `;

    db.query(sql, [petId]).then((result) => {
      calback(result.rows[0]);
    });
  };

  const createAPet = (newPet, calback) => {
    const { name, age, type, breed, microchip } = newPet;

    const sql = `
    INSERT INTO pets (name, age, type, breed, microchip)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `;

    db.query(sql, [name, age, type, breed, microchip]).then((result) => {
      calback(result.rows[0]);
    });
  };
  createTable();
  mockData();

  return {
    findAllPets,
    findOnePet,
    createAPet,
  };
}

module.exports = Pet;
