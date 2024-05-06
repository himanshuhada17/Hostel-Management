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
        type: "postgres",
        host: "aws-0-ap-south-1.pooler.supabase.com",
        port: 5432,
        username: "postgres.psepgwdturmkfolikpxy",
        password: "Bharat@1632@",
        database: "postgres",
        entities: entity_modal_1.entities,
        logging: false,
        synchronize: true,
    });
}
exports.db_connection = db_connection;
