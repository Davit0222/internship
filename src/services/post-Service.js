import Post from "../models/Post.js";

export class PostService {
  static async createPost(postData) {
    const post = new Post(postData);
    return await post.save();
  }

  static async getPostById(postId) {
    return await Post.findById(postId).populate("author", "username");
  }

  static async updatePost(postId, updateData) {
    return await Post.findByIdAndUpdate(postId, updateData, { new: true });
  }

  static async deletePost(postId) {
    return await Post.findByIdAndDelete(postId);
  }
}
