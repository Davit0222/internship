import express from "express";
import PostController from "../controllers/post-Controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js"; // Assuming you have an auth middleware

const router = express.Router();

router.post("/", authMiddleware, PostController.createPost);
router.get("/:id", authMiddleware, PostController.getPost);
router.put("/:id", authMiddleware, PostController.updatePost);
router.delete("/:id", authMiddleware, PostController.deletePost);

/////////sranic nerqevna nora
// import {
//   createPost,
//   getPost,
//   updatePost,
//   deletePost,
// } from "../controllers/post-Controller.js";

//////////
// router.post("/", authMiddleware, createPost);
// router.get("/:id", authMiddleware, getPost);
// router.put("/:id", authMiddleware, updatePost);
// router.delete("/:id", authMiddleware, deletePost);

export default router;
