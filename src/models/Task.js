import Sequelize from 'sequelize'
import { sequelize } from '../config/database'

const Task = sequelize.define('projects', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  done: {
    type: Sequelize.BOOLEAN
  },
  projectid: {
    type: Sequelize.DATE
  }
},
{
  timestamps: false
});



export default Task;