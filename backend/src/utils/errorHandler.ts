import { ErrorRequestHandler } from "express";
import { IS_DEV } from "./constants";

let errorHandler: ErrorRequestHandler = (err, req, res, next)=>{
    console.error(err);
    res.send({
     error: IS_DEV ? err : null,
     message: "Internal server error"
    })   
}

export default errorHandler;