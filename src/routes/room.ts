import express, { Router } from "express";
import { authorizeJWTToken } from "../middleware/auth";
import * as roomController from "../controllers/room-controller";

const router: Router = express.Router();

router.post("/create", authorizeJWTToken, roomController.createRoom);
router.get("/:id", authorizeJWTToken, roomController.getDetailRoom);
router.patch("/update-name/:id", authorizeJWTToken, roomController.updateRoomName);
router.get("/", authorizeJWTToken, roomController.getListRooms);

export default router;
