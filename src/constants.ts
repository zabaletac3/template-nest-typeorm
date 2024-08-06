// LIBRARIES
import { config } from 'dotenv';

// Dot env config
config({});

export default {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,

  //DATABASE
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
};
