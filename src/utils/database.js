const { Client } = require('pg');

const dotenv = require('dotenv');
console.log(dotenv);
dotenv.config();

const connection = process.env.Potato;
// console.log(process.env);
console.log(connection);
const db = new Client(connection);

module.exports = db;
