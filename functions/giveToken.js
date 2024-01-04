import fetch from 'node-fetch';

export const handler = async (event, context) => {
    try {
        // Parse the incoming JSON payload
        const { username, password } = JSON.parse(event.body);

        // Make a request to your Hasura GraphQL endpoint to check if the username and password are valid
        const hasuraResponse = await fetch('https://mutual-haddock-59.hasura.app/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'JxrntEzMopbKXNyc3dTNFfKrfaFN0Uq4Gxx4dOrEyBiet801qpfN3KKjnhsGyyEB',
            },
            body: JSON.stringify({
                query: `
          query CheckUser($username: String!, $password: String!) {
  users(where: {username: {_eq: $username}, _and: {password: {_eq: $password}}}) {
    user_id
  }
}
        `,
                variables: {
                    username,
                    password,
                },
            }),
        });

        const hasuraData = await hasuraResponse.json();

        if (hasuraData.data && hasuraData.data.users.length > 0) {
            // User found, return access token
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
                body: JSON.stringify({ message: 'Authorization successful', accessToken: 'abcderfh23242dfdfdfr32dnc3' }),
            };
        } else {
            // User not found, return unauthorized error
            return {
                statusCode: 401,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
                body: JSON.stringify({ message: 'Unauthorized - Invalid username or password' }),
            };
        }
    } catch (error) {
        // Handle any errors
        console.error(error);

        // Return an error response with CORS headers
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
            body: JSON.stringify({ message: 'internal server error' }),
        };
    }
};
