const { greetings } = require('./lib/greetings');

const handler = async (event) => {
  const { name } = event.queryStringParameters || 'unknown';
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: greetings(name),
    }),
  };
};

module.exports.hello = handler;
