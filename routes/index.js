//export router
const router = require('express').Router();

router.use('/api', require('./burgerRoutes.js'))
router.use(require('./viewRoutes.js'))

module.exports = router