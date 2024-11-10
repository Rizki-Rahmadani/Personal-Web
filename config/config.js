require("dotenv").config();
const pg = require("pg");

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    dialectModule: pg,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
        // Tambahkan opsi berikut jika diperlukan
        ca: process.env.SSL_CA_CERT, // Sertifikat CA jika diperlukan
        key: process.env.SSL_KEY, // Kunci SSL jika diperlukan
        cert: process.env.SSL_CERT, // Sertifikat SSL jika diperlukan
      },
    },
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    dialectModule: pg,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
        // Tambahkan opsi berikut jika diperlukan
        ca: process.env.SSL_CA_CERT, // Sertifikat CA jika diperlukan
        key: process.env.SSL_KEY, // Kunci SSL jika diperlukan
        cert: process.env.SSL_CERT, // Sertifikat SSL jika diperlukan
      },
    },
  },
};
