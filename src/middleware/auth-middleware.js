import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    if (!req.headers.authorization)
      throw new Error("Authorization header is missing");

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ message: "Not authorized" });
  }
};
