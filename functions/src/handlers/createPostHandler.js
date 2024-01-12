import {createPost} from "../models/postModal.js";

export const createPostHandler = async (event) => {
    try {
        const { title, content, user_id } = JSON.parse(event.body).input;
        console.log(title, content, user_id);


        const postId = await createPost(title, content, user_id);

        return {
            statusCode: 201,
            body: JSON.stringify({ message: 'Post created successfully', postId }),
        };
    } catch (error) {
        console.error('Error processing Hasura Action:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};
