const router = require('express').Router();

router.use('/', require('./home'));
router.use('/login', require('./login'));
router.use('/logout', require('./logout'));
router.use('/profile', require('./profile'));

module.exports = router;
