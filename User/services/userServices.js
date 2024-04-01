const CustomError = require('../libs/error');


const UsersModel = require('../models/userSchems')
const Producer = require('../workers/Producer')

const produce = new Producer()
require("dotenv").config();
exports.saveUser = async (payload) => {
    console.log('payload:11 ', payload);
  
   
 try{
    const response = await UsersModel.create({ name:payload.name,email:payload.email, password:payload.password, role:payload.role, uuid:payload.uuid});
    console.log('response: ', response.uuid);
   produce.publishMessage("SignUpdone", response.uuid,"saveuser")
    return response;
 }
 catch(err){
    throw err;
 }
}
