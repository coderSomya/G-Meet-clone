import { Router } from "express";
import { createNewAccount, signIn } from "../services/AuthService";
import Joi from "joi";

const authRouter = Router();


authRouter.post("/signup", async (req, res, next) => {
   
   
    const signup_schema = Joi.object({
        name: Joi.string().required().max(100),
        email: Joi.string().required().email().max(30),
        password: Joi.string().required().min(10).max(16)
    })

    const{ error, value} = signup_schema.validate(req.body)
  

    if(error){
        return res.status(403).send(error.details[0].message)
    }
    
    try {
        const result = await createNewAccount(value)
        return res.status(200).send(result)
    } catch (error) {
        next(error);
    }
})


authRouter.post('/signin', async(req, res, next)=> {
     const signin_schema = Joi.object({
        email: Joi.string().required().email().max(30),
        password: Joi.string().required().min(10).max(16)
     })


     const {error, value} = await signin_schema.validate(req.body);
     if(error){
        return res.status(403).send(error.details[0].message);
     }
     try {
        const result = await signIn(value);
        return res.status(200).send(result);
     } catch (error) {
        next(error);
     }


})


export default authRouter;
