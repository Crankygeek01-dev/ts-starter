import { describe, expect, it } from 'vitest';

import { add, multiply } from './math.js';

describe('math', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('multiplies two numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });
});
