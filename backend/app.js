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

app.listen(8000, () => {
    console.log("Listening on port 8000...");
});