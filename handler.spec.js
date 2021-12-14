const handler = require('./handler');

describe('hello', () => {
  it('generates the correct greetings for unknown', async () => {
    const event = { queryStringParameters: null };
    const result = await handler.hello(event);
    expect(result).toHaveProperty('statusCode');
    expect(result).toHaveProperty('body');
  });
  it('generates the correct greetings for camille', async () => {
    const event = { queryStringParameters: 'camille' };
    const result = await handler.hello(event);
    expect(result).toHaveProperty('statusCode');
    expect(result).toHaveProperty('body');
  });
});
