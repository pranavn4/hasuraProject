

export const handler = async (event, context) => {
  //
  // const { username, password } = JSON.parse(event.body);

  try {

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      body: JSON.stringify({ accessToken: 'Ew8jkGCNDGAo7p35RV72e0Lk3RGJoJKB' }),
    };
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
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
