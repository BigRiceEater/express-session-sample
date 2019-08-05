const router = require('express').Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  req.session.name = username;
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('you have logged out');
});

router.get('/', (req, res) => {
  const { name = 'Guest' } = req.session;
  res.render('welcome', { name });
});

router.get('/profile', (req, res) => {
  const { name } = req.session;
  if (!name) {
    res.redirect('/login');
  } else res.render('profile', { name });
});

module.exports = router;
