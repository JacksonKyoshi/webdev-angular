const express = require('express');
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const { tacheGet, tachePost, tacheDelete, tachePut, statusGet, StatusPost, statusDelete } = require('./tacheController');
const { signin, login, logout, isConnected, Register, UserGet, LogUser } = require('./authController');
const cors = require('cors')

const url = "mongodb://localhost:27017/";
const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use(cors({ credentials: true, origin: 'http://localhost:4200' }))


function checkSignIn(req, res, next) {
  if (req.session.user) {
    next();     //Si la session exist on passe à la callback suivante
  } else {
    res.status(401).send("Unauthorized");
  }
}

app.use(session({
  secret: "chut, c'est un secret",
  name: "cookieTacheApplication"
}));

function checkSignIn(req, res, next) {
  if (req.session.user) {
    next(); //Si la session existe on passe à la callback suivante
  } else {
    res.status(401).send("Unauthorized");
  }
}

app.post('/taches', tachePost);
app.delete('/taches/:id', tacheDelete);
app.delete('/status/:id', statusDelete);
app.put('/taches/:id', tachePut);
app.post('/signin', signin);
app.post('/login', login);
app.get('/taches', checkSignIn, tacheGet);
app.get('/status',statusGet);
app.post('/status',StatusPost);
app.post('/user',Register);
app.get('/user',UserGet);
app.get('/loguser',LogUser);
app.post('/logout', logout);
app.get('/isConnected',isConnected);




app.listen(port, () => {
  console.log(`L'application écoute le port ${port}`)
})

