import { Entrada } from './entrada';
import { Produto } from './produto';

export class EntradaProduto {

    public id: number;
    public compra: any
    public entrada: Entrada;
    public produto: Produto;
    public quantidade: number;
    public valorUnitario: number;

    constructor() {
        this.id = null;
        this.compra = null;
        this.entrada = new Entrada();
        this.produto = new Produto();
        this.quantidade = null;
        this.valorUnitario = null
    }

}

