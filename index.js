const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const controllers = require('./controllers');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// READ
app.get(
  '/talker', 
  controllers.listTalkers,
);

app.get(
  '/talker/:id', 
  controllers.getTalkerById,
);

app.listen(PORT, () => {
  console.log('Online');
});
