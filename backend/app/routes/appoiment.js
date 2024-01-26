import express from "express";
import AppoimentController from "../controllers/AppoimentController.js"
const appoimentRoutes = express.Router();

appoimentRoutes.get("/appoiments", AppoimentController.all);
appoimentRoutes.get("/appoiments/:id", AppoimentController.lookById);

appoimentRoutes.get("/appoiments/:id/doctor", AppoimentController.lookByDoctor);
appoimentRoutes.get("/appoiments/:id/patient", AppoimentController.lookByPatient);

appoimentRoutes.get("/appoiments/query?email=:email", AppoimentController.lookByEmail)

appoimentRoutes.post("/appoiments", AppoimentController.create);
appoimentRoutes.put("/appoiments/:id", AppoimentController.update);

appoimentRoutes.delete("/appoiments/:id", AppoimentController.delete);

export default appoimentRoutes;
