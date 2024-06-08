const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all', {
      headers: {
        'Content-Type': 'application/json',
        // Add any other necessary headers
      },
    });

    const data = response.data;

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({ message: 'Error fetching data' }),
    };
  }
};
