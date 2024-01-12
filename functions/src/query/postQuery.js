 const insert_post_query = `
    mutation CreatePost($title: String!, $content: String!, $userId: Int!) {
        insert_posts(objects: [{ title: $title, content: $content, user_id: $userId }]) {
            returning {
                id
            }
        }
    }
`;
const check_user_query = `
        query GetUser($username: String!) {
            users(where: { username: { _eq: $username } }) {
                id
            }
        }
    `;
export {insert_post_query,check_user_query}