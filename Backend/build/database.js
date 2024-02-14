"use strict";
// import { createConnection, ConnectionOptions } from "mysql";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_connection = void 0;
// export function db_connection() {
//   const pool = createConnection({
//     host: "localhost",
//     user: "root",
//     password: "21112111",
//     database: "hostel_db",
//     entities: ["src/entities/*.ts"],
//     logging: true,
//   } as ConnectionOptions);
//   pool.query(`select * from test`, (err, result) => {
//     if (err) {
//       return console.log(err);
//     }
//     return console.log(result);
//   });
// }
const typeorm_1 = require("typeorm");
const entity_modal_1 = require("./entity_modal"); // Import your User entity
function db_connection() {
    const connection = (0, typeorm_1.createConnection)({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "21112111",
        database: "hostel_db",
        entities: entity_modal_1.entities,
        logging: true,
        synchronize: true,
    });
}
exports.db_connection = db_connection;
