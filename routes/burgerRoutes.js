const router = require('express').Router();
const { Burger } = require('../controllers');

router.get('/burgers', (req, res) =>
  Burger.getBurgers((burgers) => res.json(burgers))
);

router.get('/burgers/:id', (req, res) =>
  Burger.getBurgersWhere({ id: req.params.id }, (burger) => res.json(burger))
);

router.post('/burgers', (req, res) =>
  Burger.addBurger(req.body, (info) => res.json(info))
);

router.put('/burgers/:id', (req, res) =>
  Burger.updateBurger(req.body, { id: req.params.id }, (info) => res.json(info))
);

module.exports = router;
