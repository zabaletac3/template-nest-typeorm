// LIBRARIES
import { config } from 'dotenv';

// Dot env config
config({});

export default {
  MONGO_STRING_CONNECTION: process.env.MONGO_STRING_CONNECTION,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
};
