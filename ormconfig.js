const config = require('dotenv').config

config()

module.exports = {
    type: process.env.DB_TYPE,
    host: process.env.HOST,
    database: process.env.DB,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    entities: ["dist/models/*.js"],
    migrations: ["dist/migration/*.js"],
    logging: true,
    synchronize: false,
    migrationsRun: true,
    cli: {
      migrationsDir: "src/migration",
      entitiesDir: "src/models"
    },
    extra: {
      connectionLimit: 2000
    }
}