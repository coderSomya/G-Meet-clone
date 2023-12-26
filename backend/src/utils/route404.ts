import { RequestHandler } from "express";

const notFoundHandler: RequestHandler = (req, res, next)=>{
    res.status(404).send({
        message: "The requested page does not exist"
    });
}

export default notFoundHandler;