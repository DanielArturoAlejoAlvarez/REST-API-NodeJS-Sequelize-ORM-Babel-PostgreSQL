import { Router } from "express";
import { getProject, getProjects, saveProject } from "../controllers/projects.controller";

const router = Router()

router.get('/', getProjects)
router.get('/:projectId', getProject)
router.post('/', saveProject)

export default router