import User from "../models/User-model.js";
class UserController {
  static async createUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const newUser = new User({ username, email, password });
      await newUser.save();
      res.status(201).send(newUser);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        res.status(404).send({ message: "User not found" });
        return;
      }
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async updateUserById(req, res) {
    try {
      const updates = req.body;
      const user = await User.findByIdAndUpdate(req.params.userId, updates, {
        new: true,
      });
      if (!user) {
        res.status(404).send({ message: "User not found" });
        return;
      }
      res.send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async deleteUserById(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      if (!user) {
        res.status(404).send({ message: "User not found" });
        return;
      }
      res.send({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default UserController;
