const router = require('express').Router();

router.get('', (req, res) => {
  const { name = 'Guest' } = req.session;
  res.render('welcome', { name });
});

module.exports = router;
