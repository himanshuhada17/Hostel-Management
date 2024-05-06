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
    type: "postgres",
    host: "aws-0-ap-south-1.pooler.supabase.com",
    port: 5432,
    username: "postgres.psepgwdturmkfolikpxy",
    password: "Bharat@1632@",
    database: "postgres",
    entities: entities,
    logging: false,
    synchronize: true,
  });
}


