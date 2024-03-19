import { cartServices } from '../services';
const CustomError = require('../libs/error');


export const updateProductbyCart = async (payload) => {
    const { _id , name, desc, price, stock, category } = payload
  
    try {
        const response = await cartServices.updateProduct( _id ,name, desc, price, stock, category )
        if (!response)
            throw new CustomError("Update is not done");
    }
    catch (e) {
        console.log('e: ', e);
        throw new CustomError("In catch body");
    }
}

export const updateCartbyOrder = async (payload) => {

    try {
        const response = await cartServices.orderUpdation(payload.productId)// add data here
        if (!response)
            throw new CustomError("User not created");
    }
    catch (e) {
        console.log('e: ', e);
        throw new CustomError("In catch body");
    }
}