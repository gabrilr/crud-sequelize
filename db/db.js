import Sequelize from 'sequelize';

export const sequelize = new Sequelize('mysqlmongo', 'root', 'Joga3014_', {
  host: 'localhost',
  dialect: 'mysql'
});
