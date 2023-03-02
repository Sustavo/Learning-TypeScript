const ObjetoA: {
  readonly ChaveA: string;
  ChaveB: string;
  ChaveC?: string;
  [key: string]: unknown;
} = {
  ChaveA: 'Valor A',
  ChaveB: 'Valor B',
};

ObjetoA.Chave = 'Valor novo';

console.log(ObjetoA);
