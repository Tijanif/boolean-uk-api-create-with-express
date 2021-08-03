// No need to import the Pet model just the db

const Pet = require('./model');

const { findAllPets, findOnePet } = Pet();

const findAll = (req, res) => {
  findAllPets((pets) => {
    res.json({ pets });
  });
};

const findOne = (req, res) => {
  const { id } = req.params;

  findOnePet(Number(id), (pet) => {
    res.json({ pet });
  });
};

module.exports = {
  findAll,
  findOne,
};
