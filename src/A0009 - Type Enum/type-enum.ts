enum Cores {
  Vermelho = 10,
  Azul = 100,
  Amarelo = 200,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.Amarelo);

console.log(Cores);
