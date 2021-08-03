// No need to import the Pet model just the db

const Pet = require('./model');

const { findAllPets, findOnePet, createAPet } = Pet();

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

const creatOne = (req, res) => {
  const newPet = req.body;

  createAPet(newPet, (createdPet) => {
    res.json({ Pet: createdPet });
  });
};

module.exports = {
  findAll,
  findOne,
  creatOne,
};
