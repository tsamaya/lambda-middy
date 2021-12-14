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
module.exports.greetings = greetings;
