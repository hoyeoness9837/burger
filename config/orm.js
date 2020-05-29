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
  selectAllWhere (table, where, cb) {
    db.query(`SELECT * FROM ${table} WHERE ?`, where, (err, data) => {
      if (err) { console.log(err) }
      cb(data)
    })
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
