const greetings = (name) => {
  switch (name) {
    case 'andy':
      return 'Hello!';
    case 'camille':
      return 'Salut!';
    case 'carlos':
      return '¡Hola!';
    case 'katya':
      return 'Привет!';
    case 'thuy':
      return 'Xin chào!';
    default:
      return '👋';
  }
};

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
module.exports.greetings = greetings;
