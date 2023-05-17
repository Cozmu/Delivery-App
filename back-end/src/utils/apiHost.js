require('dotenv').config();

const PROTOCOL = process.env.API_PROTOCOL;
const HOST = process.env.MYSQLHOST;

module.exports = { PROTOCOL, HOST };
