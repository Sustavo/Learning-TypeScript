export class Empresa {
  public readonly nome: string; // escrever public é redundante, não é necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Gustavo', '00.000.000/0001-11');
const colaborador1 = new Colaborador('Gongas', 'Gonga');
const colaborador2 = new Colaborador('Gust', 'Sousa');
const colaborador3 = new Colaborador('Marcos', 'Silva');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador({
  nome: 'Gisele',
  sobrenome: 'Santos',
});
empresa1.mostrarColaboradores();
