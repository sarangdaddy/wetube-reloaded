import express from "express";

import { trending, serach } from "../controllers/videoControllers";
import { join, login } from "../controllers/userControllers";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/serach", serach);

export default globalRouter;
