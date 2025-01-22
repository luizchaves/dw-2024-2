import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));

app.use(express.json());

app.get('/hello/en', (req, res) => {
  const name = req.query.name;

  res.send(`Hello, ${name}!`);
});

app.get('/hello/pt/:name', (req, res) => {
  const name = req.params.name;

  res.send(`Olá, ${name}!`);
});

app.post('/hello/es', (req, res) => {
  const name = req.body.name;

  res.send(`¡Hola, ${name}!`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
