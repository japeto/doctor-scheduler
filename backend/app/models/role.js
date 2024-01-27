import mongoose, { mongo } from "mongoose";

const roleSchema = new mongoose.Schema({
  name:{
    type: mongoose.Schema.Types.String,
    required: [
      true, "role name is required"
    ],
    validate: {
      validator: (a_name)=>{
        return a_name.indexOf(" ") < 0;
      },
      message: "name contains white spaces"
    }
  },
  description:{
    type: mongoose.Schema.Types.String,
    required: [
      true, "role name is required"
    ],
  },
  active:{
    type: mongoose.Schema.Types.Boolean,
    default:true
  }
});

const roleModel = mongoose.model("role", roleSchema)

export { roleModel, roleSchema };