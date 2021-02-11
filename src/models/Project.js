import Sequelize from 'sequelize'
import { sequelize } from '../config/database'
import Task from './Task';

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
},
{
  timestamps: false
});

Project.hasMany(Task, {primaryKey: 'projectid', sourceKey: 'id'})
Task.belongsTo(Project, {primaryKey: 'projectid', sourceKey: 'id'})

export default Project;