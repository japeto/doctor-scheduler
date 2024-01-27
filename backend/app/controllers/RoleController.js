import { roleModel } from "../models/index.js";

class RoleController {

  static async all(req, res, next){
    try{
      const documents = await roleModel.find({});
      res.status(200).json({"data":documents})
    }catch(err){
      next(err)
    }
  }
  static async lookById(req, res, next){
    try{
      const uid = req.params.id;
      const a_document = roleModel.findById(uid);
      if(a_document === null){
        // TODO: mejorar la captura de errores
        res.status(404).json({"message": "Role NOT found"})
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
      const a_document = await roleModel.create(data);
      res.status(201).json({"message": "Success!", data: a_document}) 
    }catch(err){
      next(err); 
    }
  }
  static async update(req, res, next){
    try{
      const uid = req.params.id;
      const data = req.body;
      const a_document = await roleModel.findByIdAndUpdate(uid, data);
      if(a_document === null){
        res.status(404).json({"message": "Role not found"})
      }else{
        const o_document = roleModel.findById(uid);
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
      const a_document = await roleModel.findByIdAndUpdate(uid, data);
      if(a_document === null){
        res.status(404).json({"message": "Role not found"})
      }else{
        const o_document = roleModel.findById(uid);
        res.status(201).json({"message": "Updated!", data: o_document})
      }
    }catch(err){
      next(err); 
    }
  }

}

export default RoleController;