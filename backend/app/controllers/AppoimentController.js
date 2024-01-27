import { appoimentModel } from "../models/index.js";

class AppoimentController{

  static async all(req, res, next){
    try{
      const documents = await appoimentModel.find({});
      res.status(200).json({"data":documents});
    }catch(err){
      next(err)
    }
  }
  static async lookById(req, res, next){
    try{
      const uid = req.params.id;
      const a_document = appoimentModel.findById(uid);
      if(a_document === null){
        // TODO: mejorar la captura de errores
        res.status(404).json({"message": "Appoiment NOT found"})
      }else{
        res.status(200).json(a_document)
      }
    }catch(err){
      next(err); 
    }
  }
  static async lookByDoctor(req, res, next){
    try{
      const uid = req.params.id;
      const a_document = appoimentModel.find({"doctor_id": uid});
      if(a_document === null){
        // TODO: mejorar la captura de errores
        res.status(404).json({"message": "Appoiment NOT found"})
      }else{
        res.status(200).json(a_document)
      }
    }catch(err){
      next(err)
    }
  }
  static async lookByPatient(req, res, next){
    try{
      const uid = req.params.id;
      const a_document = appoimentModel.find({"patient_id": uid});
      if(a_document === null){
        // TODO: mejorar la captura de errores
        res.status(404).json({"message": "Appoiment NOT found"})
      }else{
        res.status(200).json(a_document)
      }
    }catch(err){
      next(err)
    }
  }
  static async lookByEmail(req, res, next){
    try{
      const uid = req.params.email; // TAREA: REVISAR Y TERMINAR
      const a_document = appoimentModel.find({"doctor_id": uid});
      if(a_document === null){
        // TODO: mejorar la captura de errores
        res.status(404).json({"message": "Appoiment NOT found"})
      }else{
        res.status(200).json(a_document)
      }
    }catch(err){
      next(err)
    }
  }
  static async create(req, res, next){
    try{
      const data = req.body;
      const a_document = await appoimentModel.create(data);
      res.status(201).json({"message": "Success!", data: a_document}) 
    }catch(err){
      next(err); 
    }
  }
  static async update(req, res, next){
    try{
      const uid = req.params.id;
      const data = req.body;
      const a_document = await appoimentModel.findByIdAndUpdate(uid, data);
      if(a_document === null){
        res.status(404).json({"message": "Role not found"})
      }else{
        const o_document = appoimentModel.findById(uid);
        res.status(201).json({"message": "Updated!", data: o_document})
      }
    }catch(err){
      next(err); 
    }
  }   
  static async delete(req, res, next){
    try{
      const uid = req.params.id;
      const data = req.body;
      data.active = false; //!req.body?.active
      const a_document = await appoimentModel.findByIdAndUpdate(uid, data);
      if(a_document === null){
        res.status(404).json({"message": "Role not found"})
      }else{
        const o_document = appoimentModel.findById(uid);
        res.status(201).json({"message": "Updated!", data: o_document})
      }
    }catch(err){
      next(err); 
    }
  }   

}

export default AppoimentController;