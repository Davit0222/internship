import express from "express";
import PostController from "../controllers/post-Controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js"; // Assuming you have an auth middleware

const router = express.Router();

router.post("/", authMiddleware, PostController.createPost);
router.get("/:id", authMiddleware, PostController.getPost);
router.put("/:id", authMiddleware, PostController.updatePost);
router.delete("/:id", authMiddleware, PostController.deletePost);

export default router;
