import { Orcamento } from './orcamento';
import { Produto } from './produto';

export class OrcamentoProduto {

    public orcamento: Orcamento;
    public produto: Produto;
    public quantidade: number;

    constructor() {
        this.orcamento = new Orcamento();
        this.produto = new Produto();
        this.quantidade = null
    }

}

