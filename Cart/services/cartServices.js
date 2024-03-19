const CustomError = require('../libs/error')
const Cart = require('../models/cartSchema');
const Product = require('../models/productSchema');
const Order = require('../models/OrderSchema');
const Producer = require('../workers/producer')
const produce = new Producer()
exports.creatingCart = async (userId,  body) => {
  
  try{
    const quantity = body.quantity
    const {_id, name, desc, price, stock, category } =body.productDetails
    const uuid = uuidv4();
  
    const cart = await Cart.create({ userId,uuid, productId:productDetails._id ,quantity});
    if(cart){
        if (name && desc && price && stock && category) {
            const data = await Product.create
            ({ vendorId:productDetails.userId,productId:_id, name, desc, price, stock, category, images })
            return data;
        }
        return cart;
    }
    throw new CustomError("Empty fields", 401); 
  }
  catch(err){
    console.log(err)
    throw err;
}
   
};
exports.getCartById = async (userId) => {
    try{
       const cartitem= await Cart.find({userId , deleteStatus:false}).populate('productId');
  return cartitem;
    }
   

    catch(err){
        throw err;
       }
};
exports.updatingCart = async (userId , cartId , body) => {
    

    try{
        const quantity = body.quantity
       
        if(userId == await Cart.findById(cartId).userId){
            const updateItem = await Cart.findByIdAndUpdate(cartId,{quantity:quantity},{new:true});
            return updateItem;
        }
        throw new CustomError("Unauthorised", 401)
    }


    catch(err){
        throw err;
    }
};

exports.deletingCart = async (userId,cartId) => {
   

    try{
       
        if(userId == await Cart.findById(cartId).userId){
            const delcartitem = await Cart.findByIdAndUpdate(cartId,{deleteStatus:true},{new:true});
            return delcartitem;
        }
        throw new CustomError("Unauthorised", 401)
    }


    catch(err){
        throw err;
    }
};

exports.orderUpdation = async (productId) => {
   

    try{
       
        
            const delcartitem = await Cart.findByIdAndUpdate(productId,{deleteStatus:true},{new:true});
            return delcartitem;
        
       
    }


    catch(err){
        throw err;
    }
};

exports.updateProduct = async (_id ,name, desc, price, stock, category) => {
    

    try{
       
       
      
            const updateItem = await Product.findByIdAndUpdate(_id,{productId:_id, name, desc, price, stock, category,},{new:true});
            return updateItem;
        
        }
       
        

    catch(err){
        throw err;
    }
};
exports.creatingOrder = 
    async (cartId,userId)=> {
      try {
        const cartItem=await Cart.find(cartId)
        const Productdata =await Cart.find(cartItem.productId)
        const order = new Order({ customerId:userId, productId:cartItem.productId });
        await order.save();
        produce.publishMessage("proOrder", {Productdata , userId , productId}, "proOrder")
        return order;
      } catch (error) {
        throw new Error(error.message);
      }
    }


