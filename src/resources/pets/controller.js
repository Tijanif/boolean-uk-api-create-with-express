// No need to import the Pet model just the db
const { validationResult } = require('express-validator');

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
  // newPet('age').Number();

  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  createAPet(newPet, (createdPet) => {
    res.json({ Pet: createdPet });
  });
};

module.exports = {
  findAll,
  findOne,
  creatOne,
};
