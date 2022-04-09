const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const middlewares = require('./middlewares');
const controllers = require('./controllers');

const middlewaresLogin = [
  middlewares.validateEmail,
  middlewares.validatePassword,
];

const middlewaresTalker = [
  middlewares.validateToken,
  middlewares.validateName,
  middlewares.validateAge,
  middlewares.validateTalk,
  middlewares.validateTalkWatched,
  middlewares.validateTalkRate,
  middlewares.validateDate,
];

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// CREAT
app.post(
  '/login', 
  middlewaresLogin, 
  (_req, res) => {
    const token = crypto.randomBytes(8).toString('hex');
    return res.status(200).json({ token });
  },
);

app.post(
  '/talker',
  middlewaresTalker,
  controllers.createTalker,
);

// READ
app.get(
  '/talker',
  controllers.listTalkers,
);

app.get(
  '/talker/search', 
  middlewares.validateToken, 
  controllers.searchTalker,
);

app.get(
  '/talker/:id', 
  controllers.getTalkerById,
);

// UPDATE
app.put(
  '/talker/:id', 
  middlewaresTalker, 
  controllers.updateTalker,
);

// DELETE
app.delete(
  '/talker/:id',
  middlewares.validateToken,
  controllers.deleteTalker,
);

// LISTEN
app.listen(PORT, () => {
  console.log('Online');
});
