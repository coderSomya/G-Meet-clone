import express from "express";
import cors from "cors";
import morgan from "morgan"
import helmet from "helmet";

import { IS_DEV, PORT } from "./utils/constants";
import errorHandler from "./utils/errorHandler";
import notFoundHandler from "./utils/route404";
import authRouter from "./controllers/AuthController";

const app = express();
app.use(helmet());
app.use(cors({
    origin: IS_DEV? ["http://localhost:5173"]: "*"
}));
app.use(morgan('common'));
app.use(express.json());
app.use(errorHandler);
app.get('/home', (req, res) => {
    return res.send("<h1>Home</h1>");
})
app.use("/auth", authRouter)
app.all("*", notFoundHandler)

app.listen(PORT, ()=>
{   
    console.log(IS_DEV ? `Development Server is listening on port ${PORT}`: `Production server is listening on port ${PORT}`)
})

