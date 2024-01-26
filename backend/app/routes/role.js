import express from "express";
import RoleController from "../controllers/RoleController.js"
const roleRoutes = express.Router();

roleRoutes.get("/roles", RoleController.all);
roleRoutes.get("/roles/:id", RoleController.lookById);

roleRoutes.post("/roles", RoleController.create);
roleRoutes.put("/roles/:id", RoleController.update);

roleRoutes.delete("/roles/:id", RoleController.delete);

export default roleRoutes;
