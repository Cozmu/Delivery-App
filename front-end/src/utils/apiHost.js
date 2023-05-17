require('dotenv').config();

const PROTOCOL = process.env.API_PROTOCOL || 'http';
const HOST = process.env.API_HOST || 'localhost:3001';
export { PROTOCOL, HOST };
