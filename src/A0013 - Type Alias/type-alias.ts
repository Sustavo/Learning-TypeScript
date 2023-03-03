type Idade = number;
type Pessoa = {
  nome: string;
  idade: number;
  salario: number;
  corPreferida?: string;
};
type corRGB = 'Vermelho' | 'Verde' | 'Azul';
type corCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type corPreferida = corRGB | corCMYK;

const pessoa: Pessoa = {
  nome: 'Gustavo',
  idade: 19,
  salario: 1000,
};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Ciano'));
console.log(pessoa);
