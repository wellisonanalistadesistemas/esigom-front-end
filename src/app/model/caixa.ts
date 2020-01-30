import { CentroCusto } from './centroCusto';

export class Caixa {
    public id: number;
    public descricao: string;
    public dataPagamento: Date;
    public valor: number;
    public tipo: string;
    public centroCusto: CentroCusto;

    constructor() {
        this.id = null;
        this.descricao = null;
        this.dataPagamento = null;
        this.valor = null;
        this.tipo = null;
        this.centroCusto = new CentroCusto();
    }

}

