import express from "express";
import uroutes from "./user.js"
// import apporoutes from "./appointment.js"

const routes = app =>{
  app.use(express.json(), uroutes, /* apporoutes */)
}

export default routes;
