import express from 'express';
import routes from './routes';
<<<<<<< HEAD
=======

>>>>>>> 8cf5c73462d3bf7241a7c29cb8a4fd80c55da816
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
