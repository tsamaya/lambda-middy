const { createError } = require('http-json-errors');

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
      throw createError(500, {
        message: 'OMG! An Unexpected error',
      });
    default:
      return '👋';
  }
};
module.exports.greetings = greetings;
