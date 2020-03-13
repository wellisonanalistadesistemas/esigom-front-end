import { Orcamento } from './orcamento';

export class OrcamentoParcela {
    public id: number;
    public orcamento: Orcamento;
    public dataVencimento: Date;
    public dataPagamento: Date;
    public valor: number;
    public valorPago: number;
    public ordem: number;
    public documento: string;

    constructor() {
        this.id = null;
        this.orcamento = new Orcamento();
        this.dataVencimento = null;
        this.dataPagamento = null;
        this.valor = null;
        this.valorPago = null;
        this.ordem = null;
        this.documento = null
    }
}



