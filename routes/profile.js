const router = require('express').Router();

router.get('', (req, res) => {
  const { name } = req.session;
  if (!name) {
    res.redirect('/login');
  } else res.render('profile', { name });
});

module.exports = router;
