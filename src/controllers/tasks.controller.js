import Project from '../models/Project'
import Task from '../models/Task'

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      attributes: ['id','name','done','projectid'],
      order: [
        ['id', 'DESC']
      ],
      include: [Project]
    });
    return res.json({
      data: tasks,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTask = async (req,res)=>{
  const {taskId} = req.params
  const task = await Task.findOne({
    where: {id: taskId},
    include: [Project]
  })
  res.json(task)
}

