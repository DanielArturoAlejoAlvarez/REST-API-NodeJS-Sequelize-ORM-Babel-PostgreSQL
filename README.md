# NODE POSTGRESQL REST API (Rest API)

## Description

This repository is a Application software with NodeJS, Express, Sequelize, PostgreSQL, etc this application contains an REST API.

## Installation
Using NodeJS, Express, Sequelize(ORM), etc preferably.

## DataBase
Using PostgreSQL preferably.

## Apps
Using Postman, Insomnia, Talend API Tester, etc to feed the api.

## Usage
```html
$ git clone https://github.com/REST-API-NodeJS-Sequelize-ORM-Babel-PostgreSQL.gif [NAME APP] 

$ npm install

$ npm run dev (Development)
$ npm run build (Production)
```
Follow the following steps and you're good to go! Important:


![alt text](https://image.codeforgeek.com/wp-content/uploads/2017/01/30175751/sequelize-and-postgresql.png)


## Coding

### Config

```javascript
...
export default {
  port: process.env.PORT || 3000, 
  DB: {
    URI: process.env.NAME_DB || [your-database],
    USER: process.env.USER_DB || [your-user],
    PASSWORD: process.env.PASSWORD_DB || [your-password]
  }
}
...
```

### Database

```javascript
...
import config from './keys'
import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  config.DB.URI,
  config.DB.USER,
  config.DB.PASSWORD,
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
...
```

### Routes

```javascript
...
import { Router } from "express";
import { deleteTask, getTask, getTaskByProject, getTasks, saveTask, updateTask } from "../controllers/tasks.controller";

const router = Router()

router.get('/', getTasks)
router.get('/:taskId', getTask)
router.post('/', saveTask)
router.put('/:taskId', updateTask)
router.delete('/:taskId', deleteTask)
router.get('/project/:projectId', getTaskByProject)

export default router
...
```

### Controllers


```javascript
...
  export const getTasks = async (req, res) => {
    try {
      const tasks = await Task.findAll({
        attributes: ["id", "name", "done", "projectid"],
        order: [["id", "DESC"]],
        include: [Project],
      });
      return res.json({
        data: tasks,
      });
    } catch (error) {
      console.log(error);
    }
  };
 export const saveTask = async (req, res) => {
  const { name, done, projectid } = req.body;

  try {
    const newTask = await Task.create(
      {
        name,
        done,
        projectid,
      },
      {
        fields: ["name", "done", "projectid"],
      }
    );

    res.json({
      msg: "Task saved successfully!",
      data: newTask,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Something goes wrong!",
      data: {},
    });
  }
};

export const updateTask = async (req, res) => {
  const { name, done, projectid } = req.body;

  const { taskId } = req.params;

  try {
    const tasks = await Task.findAll({
      attributes: ["id", "name", "done", "projectid"],
      where: {
        id: taskId,
      },
    });

    if (tasks.length > 0) {
      tasks.forEach(async (task) => {
        await task.update({
          name,
          done,
          projectid,
        });
      });
    }

    return res.json({
      msg: "Task updated successfully!",
      data: tasks,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const deleteRowCount = await Task.destroy({
      where: {
        id: taskId
      }
    })
    return res.json({
      msg: "Task deleted successfully!",
      count: deleteRowCount,
    })
  } catch (error) {
    console.log(error)
  }
};
...

```

### Models

```javascript
...
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

Project.hasMany(Task, {foreignKey: 'projectid', sourceKey: 'id'});
Task.belongsTo(Project, {foreignKey: 'projectid', sourceKey: 'id'});

export default Project;
...
```



## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/REST-API-NodeJS-Sequelize-ORM-Babel-PostgreSQL. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).