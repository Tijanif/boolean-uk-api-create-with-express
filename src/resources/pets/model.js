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
  createTable();
  mockData();

  return {
    findAllPets,
  };
}

module.exports = Pet;
