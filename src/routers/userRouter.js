import express from "express";
import UserController from "../controllers/user-Controller.js";

const router = express.Router();

router.post("/", UserController.createUser);
router.get("/:userId", UserController.getUserById);
router.put("/:userId", UserController.updateUserById);
router.delete("/:userId", UserController.deleteUserById);

export default router;
