import Sequelize from 'sequelize';
<<<<<<< HEAD
import databaseConfig from '../config/database';
import Dev from '../app/models/Dev';


const models = [Dev];
=======

import User from '../app/models/User';
import databaseConfig from '../config/database';

const models = [User];
>>>>>>> 8cf5c73462d3bf7241a7c29cb8a4fd80c55da816

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
<<<<<<< HEAD
    models.map((model) => model.init(this.connection));
=======
    models
      .map((model) => model.init(this.connection));
>>>>>>> 8cf5c73462d3bf7241a7c29cb8a4fd80c55da816
  }
}

export default new Database();
