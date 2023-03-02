//tuple

const dadosCliente1: readonly [number, string] = [1, 'luiz'];
const dadosCliente2: [number, string, string?] = [1, 'luiz', 'gustavo'];
const dadosCliente3: [number, string, string?] = [1, 'luiz', 'gustavo'];
const dadosCliente4: [number, string, ...string[]] = [1, 'luiz', 'gustavo'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Gustavo';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly array
const array1: readonly string[] = ['Luiz', 'Gustavo'];
const array2: ReadonlyArray<string> = ['Luiz', 'Gustavo'];

console.log(array1);
console.log(array2);
