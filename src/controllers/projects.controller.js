import Project from "../models/Project";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    return res.json({
      data: projects,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProject = async (req, res) => {
  const { projectId } = req.params;
  try {
    const project = await Project.findOne({
      where: {
        id: projectId,
      },
    });
    return res.json(project);
  } catch (error) {
    console.log(error);
  }
};

export const saveProject = async (req, res) => {
  const { name, priority, description, deliveryday } = req.body;

  try {
    const newProject = await Project.create(
      {
        name,
        priority,
        description,
        deliveryday,
      },
      {
        fields: ["name", "priority", "description", "deliveryday"],
      }
    );

    if (newProject) {
      return res.json({
        msg: "Project saved successfully!",
        data: newProject,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Something goes wrong!",
      data: {},
    });
  }
};

export const updateProject = async (req, res) => {
  const { name, priority, description, deliveryday } = req.body;
  const { projectId } = req.params;

  try {
    const projects = await Project.findAll({
      attributes: ["id", "name", "priority", "description", "deliveryday"],
      where: {
        id: projectId,
      },
    });

    if (projects.length > 0) {
      projects.forEach(async (project) => {
        await project.update({
          name,
          priority,
          description,
          deliveryday,
        });
      });
    }

    return res.json({
      msg: "Project updated successfully!",
      data: projects,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = async (req, res) => {
  const { projectId } = req.params;
  try {
    const deleteRowCount = await Project.destroy({
      where: {
        id: projectId,
      },
    });
    return res.json({
      msg: "Project deleted successfully!",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
  }
};
