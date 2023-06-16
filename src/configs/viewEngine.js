import express from 'express';

const configViewEnginer = (app) => {
  app.set('view engine', 'ejs');
  app.set('views', './src/views');
};

export default configViewEnginer;