import dotenv from 'dotenv';
// require('dotenv/config');

const config = {};
dotenv.config();
config.development = {
  use_env_variable: 'DEV_DATABASE_URL',
  host: '127.0.0.1',
  dialect: 'postgres',
  port: 5432,
  user: 'postgres',
  password: 'didy',
  logging: false
};

config.staging = {
  use_env_variable: 'DATABASE_URL',
  seederStorage: 'sequelize'
};

config.test = {
  use_env_variable: 'TEST_DATABASE_URL',
  host: '127.0.0.1',
  dialect: 'postgres',
  port: 5432,
  user: 'postgres',
  password: 'didy',
  logging: false,
  seederStorage: 'sequelize'
};

module.exports = config;
