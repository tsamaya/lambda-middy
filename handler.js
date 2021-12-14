const middy = require('@middy/core');
const { greetings } = require('./lib/greetings');

const baseHhandler = async (event) => {
  try {
    const { name } = event.queryStringParameters || 'unknown';
    const message = greetings(name);
    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error,
      }),
    };
  }
};

const handler = middy(baseHhandler);

module.exports.hello = handler;
