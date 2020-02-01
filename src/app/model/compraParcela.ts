export class CompraParcela {

    public id: number;
    public compra: any
    public dataVencimento: Date;
    public valor: number;
    public ordem: number;
    public documento: string;

    constructor() {
        this.id = null;
        this.ordem = null;
        this.compra = null;
        this.dataVencimento = null;
        this.valor = null;
        this.documento = null
    }

}

