import { Produto } from './produto';

export class EntradaProduto {

    public id: number;
    public entrada: any;
    public produto: Produto;
    public quantidade: number;
    public valorUnitario: number;

    constructor() {
        this.id = null;
        this.valorUnitario = null;
        this.entrada = null;
        this.produto = new Produto();
        this.quantidade = null
    }

}

