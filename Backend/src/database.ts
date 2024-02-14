import { createConnection } from "mysql";

export function db_connection() {
  const pool = createConnection({
    host: "localhost",
    user: "root",
    password: "21112111",
    database: "hostel_db",
  });

  pool.query(`select * from test`, (err, result) => {
    if (err) {
      return console.log(err);
    }
    return console.log(result);
  });
}
