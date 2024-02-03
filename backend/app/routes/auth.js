import express from "express";
import AuthController from "../controllers/AuthController.js"
const AuthRoutes = express.Router();

AuthRoutes.get("/auth", AuthController.valid);
AuthRoutes.post("/auth", AuthController.login);
AuthRoutes.put("/auth", AuthController.update);

export default AuthRoutes;