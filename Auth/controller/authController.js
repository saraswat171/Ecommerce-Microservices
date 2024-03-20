const { authService } = require("../services")
const CustomError = require('../libs/error');

exports.signUp = async (req, res) => {
    try {
        const response = await authService.signUp({ body: req.body })
        if (!response)
            throw new CustomError("User not created", 400)
        return res.status(201).json({ message: "success" })
    }
    catch (e) {
      
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.login = async (req, res) => {
    try {
        const response = await authService.login({ body: req.body })
        if (!response)
            throw new CustomError("Token not created", 400)
        return res.status(201).json(response)
    }
    catch (e) {
        
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

