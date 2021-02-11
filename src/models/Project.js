import Sequelize from 'sequelize'
import { sequelize } from '../config/database'

const Project = sequelize.define('projects', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  priority: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  },
  deliveryday: {
    type: Sequelize.DATE
  }
});

export default Project;