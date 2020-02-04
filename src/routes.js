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


export default routes;
