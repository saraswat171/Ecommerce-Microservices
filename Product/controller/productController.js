const CustomError = require('../libs/error');
const { productService } = require('../services');

exports.createProduct = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await productService.createProduct({ userId: req.user.ID, files: req.files, body: req.body });
        return res.status(201).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.fetchProductsbyVendor = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await productService.fetchProductsbyVendor({ userId: req.user.ID });
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.fetchProductbyId = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await productService.fetchProductsbyVendor({ query: req.query });
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await productService.updateProduct({ userId: req.user.ID, query: req.query, body: req.body });
        return res.status(200).json(response)
    } catch (e) {
        return res.status(e?.code || 500).json(e.message)
    }
}