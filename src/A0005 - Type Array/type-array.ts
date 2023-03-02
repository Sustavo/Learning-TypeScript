export function multiplicarArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor, '');
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicarArgs(1, 2, 3);
const concat = concatenaStrings('Gustavo ', 'Sousa', 'Cacaacaca');
const upper = toUpperCase('Gu', 'Stava', 'vo');

console.log(result);
console.log(concat);
console.log(upper);
