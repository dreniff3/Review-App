import express from "express";
import { userRouter } from "./routes/user.js";

const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World</h1>');
// });

app.use('/api', userRouter);

app.listen(8000, () => {
    console.log("Listening on port 8000...");
});