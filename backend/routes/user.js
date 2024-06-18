import express from "express";
import { createUser } from "../controllers/user.js";

const router = express.Router();

router.route('/').get((req, res) => {
    res.send('<h1>Hello World</h1>');
});

router.route('/create-user').post(createUser);

export { router as userRouter };