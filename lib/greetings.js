const createError = require('http-errors');

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
    case 'error':
      throw createError(500, 'Unexpected error', { expose: true });
    default:
      return '👋';
  }
};
module.exports.greetings = greetings;
