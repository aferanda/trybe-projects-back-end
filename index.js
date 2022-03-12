require('dotenv').config();
const express = require('express');

const { loginRouter, userRouter, postRouter, categoryRouter } = require('./src/routers');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/categories', categoryRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
