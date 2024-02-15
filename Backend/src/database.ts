// import { createConnection, ConnectionOptions } from "mysql";

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

import { createConnection } from "typeorm";
import { entities } from "./entity_modal"; // Import your User entity

export function db_connection() {
  const connection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "21112111",
    database: "hostel_db",
    entities: entities,
    logging: false,
    synchronize: true,
  });
}
