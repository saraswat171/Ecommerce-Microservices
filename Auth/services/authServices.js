const CustomError = require('../libs/error');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UsersModel = require('../models/users')
const Producer = require('../workers/Producer')
const { v4: uuidv4 } = require('uuid');
const produce = new Producer()
exports.signUp = async (payload) => {
    const { email, password, role, name } = payload.body;
    if (!email)
        throw new CustomError("User email not found", 401);
    if (!password)
        throw new CustomError("User password not found", 401);
    if (!name)
        throw new CustomError("User role name found", 401);
    if (!role)
        throw new CustomError("User role not found", 401);
    const existingUser = await UsersModel.findOne({ email })
    if (existingUser)
        throw new CustomError("Email already exist", 409);
    const hashedPassword = await bcrypt.hash(password, 10);
    const uuid = uuidv4();
    const response = await UsersModel.create({ email, password: hashedPassword, role, uuid, name });
    produce.publishMessage("Signup", response)
    return response;
}

exports.login = async (payload) => {
    const { email, password } = payload.body;
    if (!email || !password)
        throw new CustomError("User credentials not found", 401);
    const user = await UsersModel.findOne({ email });
    if (!user)
        throw new CustomError("User doesn't exist", 404);
    if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ ID: user._id }, process.env.tokenKey);
        return { success: true, user, token };
    }
    throw new CustomError("Incorrect Password", 404);
}