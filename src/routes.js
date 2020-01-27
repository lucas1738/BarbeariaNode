import Router from 'express';
import User from './app/models/User';


const routes = new Router();

routes.get('/', async (req, res) => {
  try {
    const user = await User.create({
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      password_hash: '1238712387',
    });

    return res.json(user);
  } catch (error) {
    return null;
  }
});

export default routes;
