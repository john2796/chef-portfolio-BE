const pg = require("pg")
pg.defaults.ssl = true

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/chef.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done)
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: "pg",
    connection:
      "postgres://pqgxyuihkynwnz:4ed76b92ad3b9ec6ca04032728088d09157874e999ae3de765d6eced5230b162@ec2-54-221-215-228.compute-1.amazonaws.com:5432/dfovka022elf0r",
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
}

// exports.up = function(knex) {
//   return knex.schema.createTable("users", table => {
//     table.increments();

//     table
//       .string("username", 128)
//       .notNullable()
//       .unique();

//     table.string("password").notNullable();

//     table.string("email", 128).notNullable();

//     table.string("location", 128).notNullable();
//   });
// };

// exports.down = function(knex, Promise) {
//   return knex.schema.dropTableIfExists("users");
// };

// exports.up = function(knex) {
//   return knex.schema.createTable("posts", posts => {
//     posts.increments();

//     posts.string("chef_name", 255);
//     posts.string("recipe_title", 255);
//     posts.string("item_photo", 255);
//     posts.string("chef_location", 255);
//     posts.string("item_ingredients", 255);

//     posts
//       .integer("user_id")
//       .unsigned()
//       .notNullable()
//       .references("id")
//       .inTable("users")
//       .onDelete("CASCADE")
//       .onUpdate("CASCADE");
//   });
// };

// exports.down = function(knex) {
//   return knex.schema.dropTableIfExists("posts");
// };
