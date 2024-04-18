import User from "../models/User-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {
  static generateToken(user) {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET || "secret_key", {
      expiresIn: "24h",
    });
  }

  static async register(req, res) {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 8);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      const token = AuthController.generateToken(user);
      res.status(201).send({ user, token });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send({ message: "Invalid credentials" });
      }
      const token = AuthController.generateToken(user);
      res.send({ user, token });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async logout(req, res) {
    // Since JWTs are stateless, logout functionality is typically handled by the client.
    res.send({
      message: "Logout successful (ensure to delete token on client side)",
    });
  }
}

export default AuthController;
