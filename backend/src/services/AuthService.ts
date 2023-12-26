import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import DataProvider from '../utils/dataProvider';

interface AccountCreationData {
    name: string,
    email: string,
    password: string
}

interface SignInData{
  email: string,
  password: string
}

interface AuthResult{
    result: boolean,
    token: string | null
}


const client = DataProvider.getDatabaseInstance();

export const createNewAccount = async (data: AccountCreationData
): Promise<AuthResult>=>{
    try {
        let {name, email, password} = data;
        const hashedPassword = await bcrypt.hash(password, 10);

        const createdUser = await client.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
          })

         const token = jwt.sign({
             name: createdUser.name,
             email: createdUser.email
         }, process.env.JWT_SECRET!, {
            expiresIn: 3600
         });

       return {
        result: true,
        token: token
       };
    } catch (error) {
        console.log("Error creating user in service");
        throw error
    }
}


export const signIn = async (data: SignInData) : Promise<AuthResult>=>{
    try {
        const {email, password} = data;
        const user = await client.user.findUnique({
            where: {
                email: email
            }
        })

        if(!user){
            return {
                result: false,
                token: null
            }
        }

        const isMatch = await bcrypt.compare(password, user.password);  
        if(!isMatch){
            return {
                result: false,
                token: null
            }
        }
        const token = jwt.sign({
            name: user.name,
            email: user.email
        },     process.env.JWT_SECRET!, {
            expiresIn: 3600
        })

        return {
            result: true,
            token: token
        }
    } catch (error) {
        console.log("Error signing in user in service");
        throw error
    }
}


