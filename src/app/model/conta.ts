import { Cliente } from './cliente';

export class Conta {
    public id: number;
    public descricao: string;
    public cliente: Cliente;
    public numeroDocumento: string;
    public dataVencimento: Date;
    public dataPagamento: Date;
    public valor: number;
    public valorPago: number;
    public tipo: number;

    constructor() {
        this.id = null;
        this.tipo = null;
        this.descricao = null;
        this.cliente = new Cliente();
        this.numeroDocumento = null;
        this.dataVencimento = null;
        this.dataPagamento = null;
        this.valor = null;
        this.valorPago = null;
    }
}
