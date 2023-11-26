import express, { Router } from "express";
import { authorizeJWTToken } from "../middleware/auth";
import * as gameController from "../controllers/game-controller";

const router: Router = express.Router();

router.post("/create", authorizeJWTToken, gameController.createGame);
router.get("/", authorizeJWTToken, gameController.getListGames);
router.get("/:id", authorizeJWTToken, gameController.getDetailGame);

export default router;