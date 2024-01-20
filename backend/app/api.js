import * as dotenv from 'dotenv'
dotenv.config()

import express from "express";
import conectar from "./config/database.js";

const dconnection = await conectar();

dconnection.on("error", function(err){
  console.log(`Connection error,  ${err}`);
});

dconnection.on("open", ()=>{
  console.log("Successful connection");
});

const app = express()

app.listen(
  process.env.PORT,
  () => console.log(`Server alive in: 127.0.0.1:${process.env.PORT}`)
)





// functions
// const una = (a) =>{
//   console.log("hola");
// }
// const dos = function(p){
//   console.log("como estas?");
// }
// function tres(b){
//   console.log("Muy bien!!");
// }