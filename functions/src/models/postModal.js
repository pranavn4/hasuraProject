import { executeQuery } from '../utils/fetchUtil.js';
import {insert_post_query} from "../query/postQuery.js";

export async function createPost(title, content, userId) {
    const mutation = insert_post_query
    const variables = { title, content, userId };
    try {
        const response = await executeQuery(mutation, variables);
        return response.data.insert_posts.returning[0].id;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
}
