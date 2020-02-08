<<<<<<< HEAD
import { Router } from 'express';
import Dev from './app/models/Dev';

const routes = new Router();
routes.get('/', async (req, res) => {
  const dev = await Dev.create({
    name: 'Lucas Magalhães',
    email: 'lucasbarbosa1738@gmail.com',
    password_hash: '123456',
  });
  return res.json(dev);
});

=======
import Router from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authHeader from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.list);
routes.post('/sessions', SessionController.store);
routes.use(authHeader);
routes.put('/users', UserController.update);
>>>>>>> 8cf5c73462d3bf7241a7c29cb8a4fd80c55da816

export default routes;
