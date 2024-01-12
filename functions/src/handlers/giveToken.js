// handlers/authHandler.js
import {checkUserExistence} from "../models/checkUser.js";
import { generateToken } from '../utils/tokenUtil.js';

export const authHandler = async (event) => {
    try {
        const { username } = JSON.parse(event.body).input;
        const userExists = await checkUserExistence(username);

        if (userExists) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'User authorized', token: generateToken(username) }),
            };
        } else {
            return {
                statusCode: 401,
                body: JSON.stringify({ message: 'Unauthorized user' }),
            };
        }
    } catch (error) {
        console.error('Error in authHandler:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};
