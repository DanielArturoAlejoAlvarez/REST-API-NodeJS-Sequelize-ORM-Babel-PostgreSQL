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