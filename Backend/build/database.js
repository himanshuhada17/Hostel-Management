"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_connection = void 0;
const mysql_1 = require("mysql");
function db_connection() {
    const pool = (0, mysql_1.createConnection)({
        host: "localhost",
        user: "root",
        password: "21112111",
        database: "hostel_db",
    });
    pool.query("select * from test", (err, result) => {
        if (err) {
            return console.log(err);
        }
        return console.log(result);
    });
}
exports.db_connection = db_connection;
