import  jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const secretKey = process.env.SECRETKEY;

export const generateToken=(username) =>{
    const payload = {
        username: username,
    };

    const options = {
        expiresIn: '1h',
    };

    const token = jwt.sign(payload, secretKey, options);

    return token;
}

