import { Compra } from './compra';

export class CompraParcela {

    public id: number;
    public compra: Compra;
    public dataVencimento: Date;
    public valor: number;
    public ordem: number;
    public documento: string;

    constructor() {
        this.id = null;
        this.ordem = null;
        this.compra = new Compra();
        this.dataVencimento = null;
        this.valor = null;
        this.documento = null
    }

}

