import Twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const account_sid = process.env.TACCOUNT_SID
const auth_token =process.env.TAUTH_TOKEN;
const client = new Twilio(account_sid, auth_token);
console.log(auth_token)
console.log(account_sid)
export const sendWelcomeMessage = async (username,number) => {

    try {
        const message = await client.messages.create({
            body: username + ' Welcome to our service!',
            to: '+91' + number,
            from: '+12067524595',
        });

        console.log('Message sent with SID:', message.sid);
        return 'Welcome message sent successfully';
    } catch (error) {
        console.error('Error sending message:', error.message);
        return 'Error sending welcome message';
    }
};
