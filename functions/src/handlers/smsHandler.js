
import {sendWelcomeMessage} from "../utils/smsUtil.js";

export const sendWelcomeHandler = async (event) => {
    const eventPayload = JSON.parse(event.body);
    const username= eventPayload.event.data.new.username
    const number=eventPayload.event.data.new.number
    try {
        const result = await sendWelcomeMessage(username,number);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: result }),
        };
    } catch (error) {
        console.error('Error in sendWelcomeHandler:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};
