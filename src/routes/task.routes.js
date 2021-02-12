import { Router } from "express";
import { deleteTask, getTask, getTasks, saveTask, updateTask } from "../controllers/tasks.controller";

const router = Router()

router.get('/', getTasks)
router.get('/:taskId', getTask)
router.post('/', saveTask)
router.put('/:taskId', updateTask)
router.delete('/:taskId', deleteTask)

export default router