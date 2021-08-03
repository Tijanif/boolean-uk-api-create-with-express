// No need to import the Pet model just the db

const Pet = require('./model');

const { findAllPets } = Pet();

const findAll = (req, res) => {
  findAllPets((pets) => {
    res.json({ pets });
  });
};

module.exports = {
  findAll,
};
