const middy = require('@middy/core');
const inputOutputLogger = require('@middy/input-output-logger');
const httpCors = require('@middy/http-cors');
const httpSecurityHeaders = require('@middy/http-security-headers');

const { createError } = require('http-json-errors');

const jwtmiddleware = require('./lib/jwtmiddleware');
const userrightsmiddleware = require('./lib/userrightsmiddleware');
const { greetings } = require('./lib/greetings');

const baseHhandler = async (event) => {
  try {
    if (event.rights.find((r) => r === 'Deny')) {
      throw createError(403, {
        message: 'OMG!',
      });
    }
    const { name } = event.queryStringParameters || 'unknown';
    const message = greetings(name);
    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode,
      body: JSON.stringify(error),
    };
  }
};

const handler = middy(baseHhandler)
  .use(jwtmiddleware())
  .use(userrightsmiddleware())
  .use(httpCors())
  .use(inputOutputLogger())
  .use(httpSecurityHeaders());

module.exports.hello = handler;
