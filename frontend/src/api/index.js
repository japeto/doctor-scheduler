const axios = require('axios');

// TODO: se debe obtener desde el archivo env
const URL = 'http://ds_backend:9030/'

const config ={
  mode: 'no-cors',
  headers:{
    'Accept':"*/*",
    'Access-Control-Allow-Origin':"*",
    'Content-type': "application/json",
  }
}

/*** Auth */
const authUser = (data) =>{
  return axios.post(`${URL}auth`, data, config);
}

const getAllUsers = ()=>{
  config.headers["Authorization"] = localStorage.getItem('token');
  return axios.get(`${URL}user`, config);

}

module.exports = {
  authUser,
  getAllUsers
}