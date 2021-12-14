const { greetings } = require('../lib/greetings');

describe('greetings', () => {
  it('generates the correct greetings for unknown', () => {
    expect(greetings()).toBe('👋');
    expect(greetings('')).toBe('👋');
    expect(greetings(null)).toBe('👋');
    expect(greetings('UFO')).toBe('👋');
  });

  it('generates the correct greetings for andy', () => {
    expect(greetings('andy')).toBe('Hello!');
  });

  it('generates the correct greetings for camille', () => {
    expect(greetings('camille')).toBe('Salut!');
  });

  it('generates the correct greetings for carlos', () => {
    expect(greetings('carlos')).toBe('¡Hola!');
  });
  it('generates the correct greetings for katya', () => {
    expect(greetings('katya')).toBe('Привет!');
  });
  it('generates the correct greetings for thuy', () => {
    expect(greetings('thuy')).toBe('Xin chào!');
  });
  it('generates an Error', () => {
    expect(() => {
      greetings('error');
    }).toThrow();
  });
});
