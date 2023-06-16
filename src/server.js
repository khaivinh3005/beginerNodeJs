import express from 'express';
import configViewEnginer from './configs/viewEngine';

const path = require('path');

const app = express();
const port = 3000;

configViewEnginer(app);

app.get('/', (req, res) => {
  res.render('test/index.ejs');
});

app.get('/home', (req, res) => {
  res.send('home 22!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
