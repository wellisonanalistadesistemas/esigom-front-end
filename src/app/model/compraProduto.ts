import { Produto } from './produto';

export class CompraProduto {

    public id: number;
    public compra: any
    public produto: Produto;
    public quantidade: number;
    public valorUnidade: number;

    constructor() {
        this.id = null;
        this.compra = null;
        this.produto = new Produto();
        this.quantidade = null;
        this.valorUnidade = null
    }

}

