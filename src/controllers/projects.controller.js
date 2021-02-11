import Project from '../models/Project'

export const getProjects = async (req,res)=>{
  try {
    const projects = await Project.findAll()
    return res.json({
      data: projects
    })
  } catch (error) {
    console.log(error)
  }
}



export const saveProject = async (req,res)=>{
  const {name,priority,description,deliveryday} = req.body

  try {
    const newProject = await Project.create({
      name,
      priority,
      description,
      deliveryday
    }, {
      fields: ['name','priority','description','deliveryday']
    })
  
    if (newProject) {
      return res.json({
        msg: "Project saved successfully!",
        data: newProject
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: "Something goes wrong!",
      data: {}
    })
  }

}