const asyncHandler = require("express-async-handler");
const { model } = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require("../models/userModel");
//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All felds are mandatory");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("user already register");
    }
    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password is :", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    })
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("user data not valid");
    }
    res.json({ message: "register the user" });
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({ email });
    //compare password with hashed PWD
    if (user && (await bcrypt.compare(password, user.password))) {
        const accesToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            }
        },
            process.env.ACCES_TOKEN_SECRET)
        res.status(200).json({ accesToken })
    }

    res.json({ message: "login the user" })
});

//@desc CurrentUser user
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "current user information" })
});
module.exports = {
    registerUser,
    loginUser,
    currentUser
}