
import {check_user_query} from "../query/postQuery.js";
import {executeQuery} from "../utils/fetchUtil.js";

export const checkUserExistence = async (username) => {
    const query = check_user_query
    const variables = { username };
    try {
        const response = await executeQuery(query, variables);
        return response.data.users[0];
    } catch (error) {
        console.error('Error checking user existence:', error);
        return false;
    }
};
