import { userModel } from "../models/index.js";

class UserController {
  // find all user in db
  // recupere todos los usuarios
  static async all(req, res, next){
    try{
      const documents = await userModel.find({});
      res.status(200).json({"data":documents})
    }catch(err){
      next(err);
    }
  }

  static async lookById(req, res, next){
    try{
      const uid = req.params.id;
      const a_document = userModel.findById(uid);
      
      if(a_document === null){
        // TODO: mejorar la captura de errores
        res.status(404).json({"message": "User not found"})
      }else{
        res.status(200).json(a_document)
      }

    }catch(err){
      next(err); 
    }
  }
  
  static async create(req, res, next){
    try{
      const data = req.body;
      const a_document = await userModel.create(data);
      res.status(201).json({"message": "Success!", data: a_document})
    }catch(err){
      next(err);
    }
  }

  static async update(req, res, next){
    try{
      const uid = req.params.id;
      const data = req.body;
      const a_document = await userModel.findByIdAndUpdate(uid, data);
      if(a_document === null){
        res.status(404).json({"message": "User not found"})
      }else{
        const o_document = userModel.findById(uid);
        res.status(201).json({"message": "Updated!", data: o_document})
      }
    }catch(err){
      next(err);
    }
  }

  static async delete(req, res, next){
    try{
      const uid = req.params.id;
      // NO a la eliminacion persistente
      // const data = {active:false};
      // const a_document = userModel.findByIdAndUpdate(uid, data);
      
      // SI a la eliminacion persistente
      const a_document = await userModel.findByIdAndDelete(uid);
      
      if(a_document === null){
        res.status(404).json({"message": "User not found"})
      }else{
        res.status(201).json({"message": "Updated!", data: a_document})
      }
    }catch(err){
      next(err);
    }
  }
};

export default UserController;