const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const middlewares = require('./middlewares');
const controllers = require('./controllers');

const validationMiddlewares = [
  middlewares.validateEmail,
  middlewares.validatePassword,
];

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// CREAT
app.post('/login', 
  validationMiddlewares, 
  (_req, res) => {
    const token = crypto.randomBytes(8).toString('hex');
    return res.status(200).json({ token });
  });

// READ
app.get('/talker', controllers.listTalkers);

app.get('/talker/:id', controllers.getTalkerById);

app.listen(PORT, () => {
  console.log('Online');
});
