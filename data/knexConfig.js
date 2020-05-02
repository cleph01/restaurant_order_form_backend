const DB_ENV = process.env.NODE_ENV || "development";

const config = require("../knexfile.js")[DB_ENV];

// we must select the development object from our knexfile
// const db = knex(config.development);

const db = require("knex")(config);

// export for use in codebase
module.exports = db;
