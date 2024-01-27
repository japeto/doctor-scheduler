import express from "express";
import roleRoutes from "./role.js"
import userRoutes from "./user.js"
import appoimentRoutes from "./appoiment.js"

const routes = app =>{
  app.use(express.json(), 
    userRoutes, roleRoutes, appoimentRoutes
  )
};

export default routes;
