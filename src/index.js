import express from "express";
import mongoose from "mongoose";
//import swaggerUi from "swagger-ui-express";
//import YAML from "yamljs";
import userRoutes from "./routers/userRouter.js";
import authRoutes from "./routers/authRouter.js";
import postRoutes from "./routers/postRouter.js";
import { errorHandler } from "./exceptions/errorHandler.js";
const router = express.Router();
router.use(express.json());
const app = express();

const swaggerDocument = YAML.load("./src/api-docs.yaml");
app.use(router);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/posts", postRoutes);
//router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use(errorHandler);
const mongo_url = "mongodb://localhost:27017/dbconnect";
mongoose
  .connect(mongo_url)
  .then(() =>
    app.listen(process.env.PORT || 3000, () =>
      console.log(
        `Server running on port ${
          process.env.PORT || 3000
        } and Database connected successfully`
      )
    )
  )
  .catch((err) => console.error("Could not connect to MongoDB", err));
