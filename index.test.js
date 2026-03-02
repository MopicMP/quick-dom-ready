const { ready, batch } = require('./index');

describe('quick-dom-ready', () => {
  test('should process string input', () => {
    expect(ready('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => ready(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = ready('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
