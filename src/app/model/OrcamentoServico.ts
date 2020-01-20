import { Orcamento } from './orcamento';
import { Produto } from './produto';
import { Servico } from './servico';

export class OrcamentoServico {

    public orcamento: Orcamento;
    public servico: Servico;
    public quantidade: number;

    constructor() {
        this.orcamento = new Orcamento();
        this.servico = new Servico();
        this.quantidade = null
    }

}

