import Project from "../models/Project";
import Task from "../models/Task";

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

export const getTask = async (req, res) => {
  const { taskId } = req.params;
  const task = await Task.findOne({
    where: { id: taskId },
    include: [Project],
  });
  res.json(task);
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
