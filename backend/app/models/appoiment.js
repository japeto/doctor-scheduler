import mongoose from "mongoose";

const appoimentSchema = new mongoose.Schema({
  appoiment_date:{
    type: mongoose.Schema.Types.Date,
    required:[true, "date is required"]
  },
  doctor_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required:[true, "Please, choose a doctor"]
  },
  patient_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required:[true, "Please, choose a patient"]
  },
  description:{
    type: mongoose.Schema.Types.String
  }
});

const appoimentModel = mongoose.model("appoiment", appoimentSchema);

export { appoimentModel, appoimentSchema};