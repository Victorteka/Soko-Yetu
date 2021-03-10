import { createConnection } from "typeorm"
import {config} from "dotenv"

config()
export const DBConnect = async () =>{
    try {
        if (process.env.NODE_ENV === "development") {
          return createConnection({
              type: "postgres",
              host: process.env.HOST,
              database: process.env.TEST_DB,
              port: 5432,
              username: process.env.DB_USER,
              password: process.env.DB_PASSWORD,
              entities: ["dist/models/*.js"],
              migrations: ["dist/migration/*.js"],
              logging: false,
              synchronize: false,
              migrationsRun: true,
              cli: {
              migrationsDir: "src/migration",
              entitiesDir: "src/models"
            },
              extra: {
              connectionLimit: 20
             }
          });
        } else {
          return createConnection();
        }
      } catch (error) {
        console.log(`Error creating a connection to the database: ${error}`);
      }
}