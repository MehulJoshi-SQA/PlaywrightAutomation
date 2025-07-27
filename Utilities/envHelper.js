// Load dotenv to manage environment variables
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const ENV = process.env.ENV || 'QA'; // Default to QA if ENV is not set

const getEnvVar = (key) => {
  const value = process.env[`${ENV}_${key}`];
  if (!value) {
    throw new Error(`Missing environment variable for key: ${ENV}_${key}`);
  }
  return value;
};

// Store username and password in variables
const baseURL = getEnvVar('BASE_URL');
const userName = getEnvVar('USERNAME');
const password = getEnvVar('PASSWORD');

module.exports = {
  ENV,
  getEnvVar,
  baseURL,
  userName,
  password
};