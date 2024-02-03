import { userModel } from "../models/index.js";

import jwt from 'jsonwebtoken';

// TODO: obtener desde el archvivo .env
const secretKey = 'sha8271yqu1UD';

class AuthController {
  // find all user in db
  // recupere todos los usuarios
  static async valid(req, res, next){
    try{
      const token = req.header('Authorization');
      if (!token) return res.status(401).json({ error: 'Authentication failed' });

      jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token is not valid' });
        req.user = user;
        res.status(200).json({"token": token, "name": user.name})
      });
      
    }catch(err){
      next(err);
    }
  }

  static async login(req, res, next){
    try{
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });

      if (!user) {
        return res.status(401).json({"message": "Authentication failed"})
      }
      //validacion de contrasena}
      if(!password === user.password){
        return res.status(401).json({ error: 'Authentication failed' });
      }

      const token = jwt.sign({ user_id: user._id, name: user.name, rol_id:user.rol_id }, secretKey, { expiresIn: '1h' });
      res.status(201).json({"token": token, "name": user.name})

    }catch(err){
      next(err); 
    }
  }
  
  static async update(req, res, next){
    try{
      const token = req.header('Authorization');
      if (!token) return res.status(401).json({ error: 'Authentication failed' });

      jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token is not valid' });
        req.user = user;
        const token = jwt.sign({ user_id: user._id, name: user.name, rol_id:user.rol_id }, secretKey, { expiresIn: '1h' });
        res.status(201).json({"token": token, "name": user.name})
      });

    }catch(err){
      next(err); 
    }
  }

};

export default AuthController;