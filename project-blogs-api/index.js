require('dotenv').config();
const express = require('express');

const errorMiddleware = require('./src/middlewares/error.middleware');
const { loginRouter, userRouter, postRouter, categoryRouter } = require('./src/routes');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/categories', categoryRouter);

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
