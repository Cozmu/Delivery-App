const dotenv = require('dotenv');

dotenv.config();

const environment = process.env.NODE_ENV || 'test';

const suffix = { // rebuild
  prod: '',
  production: '',
  dev: '-dev',
  development: '-dev',
  test: '-test',
};

const options = {
  host: process.env.HOSTNAME || process.env.MYSQLHOST || 'localhost',
  port: process.env.MYSQLPORT || '6057',
  database:
    `${process.env.MYSQLDATABASE || 'delivery-app'}${suffix[environment] || suffix.test}`,
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '123456',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};