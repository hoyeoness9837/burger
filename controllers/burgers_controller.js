//import express, burger.js
const orm = require('../config/orm.js');

module.exports = {
  getBurgers(cb) {
    orm.selectAll('burgers', (burgers) => cb(burgers));
  },
  getBurgersWhere (where, cb) {
    orm.selectAllWhere('burgers', where, burgers => cb(burgers))
  },
  addBurger(burger, cb) {
    orm.insertOne('burgers', burger, (info) => cb(info));
  },
  updateBurger(changes, where, cb) {
    orm.updateOne('burgers', changes, where, (info) => cb(info));
  },
};
