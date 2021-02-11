import { Router } from "express";
import { saveProject } from "../controllers/projects.controller";

const router = Router()

router.post('/', saveProject)

export default router