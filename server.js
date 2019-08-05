const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: '343ji43j4n3jn4jk3n',
    resave: true,
    saveUninitialized: false
  })
);

app.set('view engine', 'pug');
app.set('views', './views');

const router = require('./routes');
app.use(router);

app.listen(3000, () => console.log('server running 3000'));

// https://www.npmjs.com/package/connect-mongo

// var mongoose = require('mongoose');
// var mongoStore = require('connect-mongo')(session);
// var mongodb = mongoose.connect(config.mongodb);
// app.use(session({
//   name: 'myCookie',
//   secret: 'tehSecret',
//   resave: true,
//   saveUninitialized: true,
//   unset: 'destroy',
//   store: new mongoStore({
//     db: mongodb.connection.db,
//     collection: 'sessions'
//   })
// }));
