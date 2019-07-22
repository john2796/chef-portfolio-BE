// Update with your config settings.
const pg = require("pg")
pg.defaults.ssl = true

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/db.sqlite3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection:
      "postgres://pqgxyuihkynwnz:4ed76b92ad3b9ec6ca04032728088d09157874e999ae3de765d6eced5230b162@ec2-54-221-215-228.compute-1.amazonaws.com:5432/dfovka022elf0r",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true
  }
}
