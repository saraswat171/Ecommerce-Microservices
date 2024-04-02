const UserModel = require('../models/userSchema')
const CustomError = require('../libs/error');

exports.createUser = async (payload) => {
    const uuid = payload.uuid
    console.log('uuid: ', uuid);
    const user = await UserModel.findOne({ uuid });
    if (user)
        throw new CustomError("User all ready exist")
    const data = await UserModel.create({ ...payload })
    console.log('data: ', data);
    return data;
}