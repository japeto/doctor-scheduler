import "dotenv/config";

import express from "express";
import conectar from "./config/database.js";
// obtengo las rutas de mi API
import routes from "./routes/index.js"
import cors from "cors"

conectar(); // conexion a la DB
const app = express()

app.use(cors())
// vinculo todas las rutas a express
routes(app); // se incluyen las rutas

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