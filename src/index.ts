import { add, multiply } from './math.js';

function main(): void {
  const a = 6;
  const b = 7;
  console.log(`add(${a}, ${b}) = ${add(a, b)}`);
  console.log(`multiply(${a}, ${b}) = ${multiply(a, b)}`);
}

main();
