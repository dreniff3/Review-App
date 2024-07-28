import express from "express";
// import dotenv from 'dotenv';
// dotenv.config();
import connectDB from "./db/index.js";
import { userRouter } from "./routes/user.js";

connectDB();  // Conect to MongoDB

const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World</h1>');
// });
app.use(express.json());
app.use('/api/user', userRouter);

// middleware tester:
app.post("/sign-in", 
    (req, res, next) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ error: "email/password missing!"});
        }
        next();
    },
    (req, res) => {
        res.send("<h1>Hello!</h1>");
    }
);

app.listen(8000, () => {
    console.log("Listening on port 8000...");
});