const handler = require('../handler');

describe('greetings', () => {
  it('generates the correct greetings for unknown', () => {
    expect(handler.greetings()).toBe('👋');
    expect(handler.greetings('')).toBe('👋');
    expect(handler.greetings(null)).toBe('👋');
    expect(handler.greetings('UFO')).toBe('👋');
  });

  it('generates the correct greetings for andy', () => {
    expect(handler.greetings('andy')).toBe('Hello!');
  });

  it('generates the correct greetings for camille', () => {
    expect(handler.greetings('camille')).toBe('Salut!');
  });

  it('generates the correct greetings for carlos', () => {
    expect(handler.greetings('carlos')).toBe('¡Hola!');
  });
  it('generates the correct greetings for katya', () => {
    expect(handler.greetings('katya')).toBe('Привет!');
  });
  it('generates the correct greetings for thuy', () => {
    expect(handler.greetings('thuy')).toBe('Xin chào!');
  });
});
