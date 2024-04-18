import Post from "../models/Post-model.js";

class PostController {
  static async createPost(req, res) {
    try {
      const { title, content } = req.body; // Destructure directly if you use specific fields
      const post = new Post({
        title,
        content,
        author: req.user._id, // Assuming author's ID is stored in request by auth middleware
      });
      await post.save();
      res.status(201).send(post);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async getPost(req, res) {
    try {
      const post = await Post.findById(req.params.id).populate("author");
      if (!post) {
        return res.status(404).send({ message: "Post not found" });
      }
      res.send(post);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async updatePost(req, res) {
    try {
      const { title, content } = req.body; // Assume that posts might be updated with these fields
      const post = await Post.findByIdAndUpdate(
        req.params.id,
        { title, content },
        { new: true, runValidators: true }
      );
      if (!post) {
        return res.status(404).send({ message: "Post not found" });
      }
      res.send(post);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async deletePost(req, res) {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      if (!post) {
        return res.status(404).send({ message: "Post not found" });
      }
      res.send({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default PostController;
