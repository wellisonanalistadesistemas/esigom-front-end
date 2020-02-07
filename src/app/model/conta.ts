import { Cliente } from './cliente';
import { Fornecedor } from './fornecedor';
import { CentroCusto } from './centroCusto';
import { ContaParcela } from './contaParcela';

export class Conta {
    public id: number;
    public cliente: Cliente;
    public centroCusto: CentroCusto;
    public fornecedor: Fornecedor;
    public numeroDocumento: string;
    public dataVencimento: Date;
    public dataPagamento: Date;
    public valor: number;
    public valorPago: number;
    public tipo: number;
    parcelas = new Array<ContaParcela>();

    constructor() {
        this.id = null;
        this.tipo = 1;
        this.parcelas = new Array<ContaParcela>();
        this.centroCusto = new CentroCusto();
        this.fornecedor = new Fornecedor();
        this.cliente = null;
        this.numeroDocumento = null;
        this.dataVencimento = null;
        this.dataPagamento = null;
        this.valor = null;
        this.valorPago = null;
    }
}
