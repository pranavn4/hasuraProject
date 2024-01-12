import dotenv from 'dotenv';
dotenv.config();
export async function executeQuery(query, variables) {
    const graphql_end_point = process.env.GRAPHQLENDPOINT
    console.log(graphql_end_point)
    try {
        const response = await fetch(graphql_end_point, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': process.env.XHASURAADMINSECRET,
            },
            body: JSON.stringify({
                query:query,
                variables:variables,
            }),
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
}
