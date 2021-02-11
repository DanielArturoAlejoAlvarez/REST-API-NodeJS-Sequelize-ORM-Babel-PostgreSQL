import { Router } from "express";
import { deleteProject, getProject, getProjects, saveProject, updateProject } from "../controllers/projects.controller";

const router = Router()

router.get('/', getProjects)
router.get('/:projectId', getProject)
router.post('/', saveProject)
router.put('/:projectId', updateProject)
router.delete('/:projectId', deleteProject)

export default router