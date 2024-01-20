import mongoose from "mongoose";

async function contectar(){
  // template
  // mongoose.connect("mongodb://username:password@127.0.0.1:27017/dscheduler");
  mongoose.connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`)
  return mongoose.connection;
}

export default contectar;