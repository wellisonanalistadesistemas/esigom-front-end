import { Conta } from './conta';

export class ContaParcela {

    public id: number;
    public situacao: number;
    public conta: Conta;
    public dataVencimento: Date;
    public dataPagamento: Date;
    public valor: number;
    public valorPago: number;
    public ordem: number;
    public descricao: string;

    constructor() {
        this.id = null;
        this.ordem = null;
        this.conta = new Conta();
        this.dataVencimento = null;
        this.dataPagamento = null;
        this.valorPago = null;
        this.valor = null;
        this.descricao = null;
        this.situacao = 1;
    }
}

