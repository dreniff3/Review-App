import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type: String,
        trim: true,
        required: true
    },
    email : {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    }
});

const User = new mongoose.model("User", userSchema);

export default User;