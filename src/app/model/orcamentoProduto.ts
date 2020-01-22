import { Produto } from './produto';

export class OrcamentoProduto {

    public id: number;
    public orcamento: any
    public produto: Produto;
    public quantidade: number;

    constructor() {
        this.id = null;
        this.orcamento = null;
        this.produto = new Produto();
        this.quantidade = null
    }

}

