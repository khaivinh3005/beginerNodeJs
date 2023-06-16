import express from 'express';
import configViewEnginer from './configs/viewEngine';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
console.log('port : ', port);

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
