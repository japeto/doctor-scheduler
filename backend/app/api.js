import "dotenv/config";

import express from "express";
import conectar from "./config/database.js";
// obtengo las rutas de mi API
import routes from "./routes/index.js"

const dconnection = await conectar();

dconnection.on("error", function(err){
  console.log(`Connection error,  ${err}`);
});

dconnection.on("open", ()=>{
  console.log("Successful connection");
});

const app = express()
// vinculo todas las rutas a express
routes(app);


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