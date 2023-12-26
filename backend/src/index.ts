import express from "express";
import cors from "cors";
import morgan from "morgan"
import helmet from "helmet";

import { IS_DEV, PORT } from "./utils/constants";
import errorHandler from "./utils/errorHandler";
import notFoundHandler from "./utils/route404";

const app = express();
app.use(helmet());
app.use(cors({
    origin: IS_DEV? ["http://localhost:5173"]: "*"
}));
app.use(morgan('common'));
app.use(errorHandler);


app.all("*", notFoundHandler)

app.listen(PORT, ()=>
{   

    console.log(IS_DEV ? `Development Server is listening on port ${PORT}`: `Production server is listening on port ${PORT}`)
})

