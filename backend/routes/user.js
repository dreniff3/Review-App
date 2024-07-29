import express from "express";
import { createUser } from "../controllers/user.js";
import { userValidator, validate } from "../middleware/validator.js";

const router = express.Router();

router.route('/').get((req, res) => {
    res.send('<h1>Hello World</h1>');
});

router.route('/create').post(userValidator, validate, createUser);

export { router as userRouter };