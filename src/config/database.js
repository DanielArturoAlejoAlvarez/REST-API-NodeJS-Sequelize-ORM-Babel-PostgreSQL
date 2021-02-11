import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  'node_postgresql_rest_api',
  'postgres',
  'Br1tney$2=',
  {
    host: '127.0.0.1',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    },
    logging: false
  }
)