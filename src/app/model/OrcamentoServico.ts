import { Produto } from './produto';
import { Servico } from './servico';

export class OrcamentoServico {

    public id: number;
    public orcamento: any
    public servico: Servico;
    public quantidade: number;

    constructor() {
        this.id = null;
        this.orcamento = null;
        this.servico = new Servico();
        this.quantidade = null
    }

}

