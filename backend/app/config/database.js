import mongoose from "mongoose";

 const conectar = async()=> {
  // template
  // mongoose.connect("mongodb://username:password@127.0.0.1:27017/dscheduler");
  try{
    const dconnection = await mongoose.connect(`mongodb://${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`)
    
    dconnection.on("error", function(err){
      console.log(`Connection error,  ${err}`);
    });

    dconnection.on("open", ()=>{
      console.log("Successful connection");
    });

    return  mongoose.connection;
  }catch(err){

  }
}

export default conectar;