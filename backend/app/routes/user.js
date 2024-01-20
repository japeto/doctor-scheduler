import express from "express";
import UserController from "../controllers/UserController.js"
const userRoutes = express.Router();

userRoutes.get("/user", UserController.all);
userRoutes.get("/user/:id", UserController.lookById);
userRoutes.post("/user", UserController.create);
userRoutes.put("/user/:id", UserController.update);
userRoutes.delete("/user/:id", UserController.delete);

export default userRoutes;