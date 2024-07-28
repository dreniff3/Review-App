import User from "../models/user.js";

const createUser = async (req, res) => {
    const {name, email, password} = req.body;

    // check if this user already exists in db
    const oldUser = await User.findOne({ email });
    if (oldUser) {
        return res.status(401).json({ error: "This email is already in use!"});
    }

    const newUser = new User({name, email, password});
    await newUser.save();

    res.status(201).json({ user: newUser });
};

export { createUser };