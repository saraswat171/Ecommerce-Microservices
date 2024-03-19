const cartService = require('../services/cartServices');
exports.createCart = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
            const userId = req.user.ID;
        const cart = await cartService.creatingCart(userId,req.body); // body json object
         res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.fetchCart = async (req, res) => {
    try {  if (!res.locals.isAuthenticated) {
        throw new CustomError("User not authorised", 401)
    }
        const userId = req.user.ID;
        const cart = await cartService.getCartById(userId);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateCart= async(req,res)=>{
    try{if (!res.locals.isAuthenticated) {
        throw new CustomError("User not authorised", 401)
    }
        const userId = req.user.ID;
        const response = await cartService.updatingCart(userId,req.params.cartId , req.body);
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
}

exports.deleteCart = async (req, res) => {
    try {if (!res.locals.isAuthenticated) {
        throw new CustomError("User not authorised", 401)
    }
        const userId = req.user.ID;
        await cartService.deletingCart(userId ,req.params.cartId);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createOrder = 
    async (req, res) =>{
  
      try {
        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
            const userId = req.user.ID;
      const cartId = req.params;
        const order = await cartService.creatingOrder(cartId,userId );
        res.status(201).json(order);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
