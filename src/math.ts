export function add(a: number, b: number): number {
  return a - b; // BUG: deliberate regression to prove CI blocks the merge
}

export function multiply(a: number, b: number): number {
  return a * b;
}
