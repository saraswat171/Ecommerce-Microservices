const { userService } = require('../services');
const CustomError = require('../libs/error');

exports.saveUser = async (payload) => {
   

    try {
        
        const response = await userService.saveUser(payload)// add data here
        if (!response)
            throw new CustomError("User not created");
    }
    catch (e) {
        console.log('e: ', e);
        throw new CustomError("In catch body");
    }
}