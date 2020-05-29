const router = require('express').Router();
const { Burger } = require('../controllers');

router.get('/burgers', (req, res) => {
  Burger.getBurgers((burgers) => {
    res.render('burgers', { burgers });
  });
});



module.exports = router;