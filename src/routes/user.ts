import express, { Router } from "express";
import { authorizeJWTToken } from "../middleware/auth";
import * as userController from "../controllers/user-controller";

const router: Router = express.Router();

router.post("/sign-up", userController.createUser);
router.post("/login", userController.login);
router.get("/profile", authorizeJWTToken, userController.getDetailMe);
router.get("/profile/:id", authorizeJWTToken, userController.getDetailUser);
router.put("/update/:id", authorizeJWTToken, userController.updateUser);
router.post("/refresh", userController.refreshToken);
router.get("/", userController.getListUser);
router.post("/search", userController.searchUser);

export default router;
