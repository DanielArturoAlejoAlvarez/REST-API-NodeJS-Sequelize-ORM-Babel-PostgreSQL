import { Router } from "express";
import { getTask, getTasks, saveTask } from "../controllers/tasks.controller";

const router = Router()

router.get('/', getTasks)
router.get('/:taskId', getTask)
router.post('/', saveTask)

export default router