const router = require('express').Router();
const { Burger } = require('../controllers');

router.get('/', (req, res) => {
  Burger.getBurgers((burgers) => {
    res.render('burgers', { burgers });
  });
});
router.get('/burgers', (req, res) => {
  Burger.getBurgers((burgers) => {
    res.render('burgers', { burgers });
  });
});

module.exports = router;
