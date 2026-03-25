import express from "express";

import { filerByQueryController } from "../controllers/filerByQueryController.js";
import { filerByParamsController } from "../controllers/filerByParamsController.js";

export const apiRouter = express.Router();

apiRouter.get("/", filerByQueryController);
apiRouter.get("/:field/:term", filerByParamsController);
