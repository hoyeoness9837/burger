//Import (require) connection.js into orm.js
//In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database
//     * `selectAll()``insertOne()` `updateOne()`
const db = require('./connection');

module.exports = {
  selectAll(table, cb) {
    db.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) {
        console.log(err);
      }
      cb(data);
    });
  },

  insertOne(table, data, cb) {
    db.query(`INSERT INTO ${table} SET ?`, data, (err, info) => {
      if (err) {
        console.log(err);
      }
      cb(info);
    });
  },
  updateOne(table, changes, where, cb) {
    db.query(
      `UPDATE ${table} SET ? WHERE ? `,
      [changes, where],
      (err, info) => {
        if (err) {
          console.log(err);
        }
        cb(info);
      }
    );
  },
};
