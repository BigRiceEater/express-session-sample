const router = require('express').Router();

router.get('', (req, res) => {
  const { warn } = req.query;
  console.log(warn);
  res.render('login', { wrongCredentials: warn });
});

router.post('', (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  if (password === 'opensesame') {
    req.session.name = username;
    res.redirect('/');
  } else {
    res.redirect('/login?warn=true');
  }
});

module.exports = router;
