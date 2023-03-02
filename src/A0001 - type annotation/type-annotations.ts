/* eslint-disable*/
let nome: string = 'Gustavo';
let id: number = 19;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['1', '2', '3'];
let arrayDeStrings2: string[] = ['1', '2', '3'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Luiz'
};

//Funcoes

function soma(x: number, y: number) {
  return x + y;
}

const result = soma(2, 2);
