const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModels")

const protect = asyncHandler(async (req, res, next) => {
    let token

    // checking its authorizised type 
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // Get Token From Header
            token = req.headers.authorization.split(" ")[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // get user from the token
            req.user = await User.findById(decoded.id).select("-password");
            
            // Calling next Middleware
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not Authorized");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("No Token");
    }
})

module.exports = { protect }