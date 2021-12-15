const middy = require('@middy/core');
const inputOutputLogger = require('@middy/input-output-logger');
const cors = require('@middy/http-cors');
const httpSecurityHeaders = require('@middy/http-security-headers');
const httpErrorHandler = require('@middy/http-error-handler');

const { greetings } = require('./lib/greetings');

const baseHhandler = async (event) => {
  const { name } = event.queryStringParameters || 'unknown';
  const message = greetings(name);
  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };
};

const handler = middy(baseHhandler)
  .use(cors())
  .use(httpSecurityHeaders())
  .use(inputOutputLogger())
  .use(httpErrorHandler());

module.exports.hello = handler;
