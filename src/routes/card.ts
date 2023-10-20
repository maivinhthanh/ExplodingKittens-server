import express, { Router } from "express";
import { authorizeJWTToken } from "../middleware/auth";
import * as cardController from "../controllers/card-controller";

const router: Router = express.Router();

router.post("/create", authorizeJWTToken, cardController.createCard);
router.post("/update/:id", authorizeJWTToken, cardController.getDetailCard);
router.get("/", cardController.getListCard);

export default router;
