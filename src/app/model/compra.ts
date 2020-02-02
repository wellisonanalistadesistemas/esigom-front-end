import { CentroCusto } from './centroCusto';
import { Fornecedor } from './fornecedor';
import { FormaPagamento } from './formaPagamento';
import { CompraParcela } from './compraParcela';
import { CompraProduto } from './compraProduto';

export class Compra {
    public id: number;
    public fornecedor: Fornecedor;
    public centroCusto: CentroCusto;
    public formaPagamento: FormaPagamento;
    public dataEntrada: Date;
    public notaFiscal: string;
    public parcelas = new Array<CompraParcela>();
    public produtos = new Array<CompraProduto>();

    constructor() {
        this.id = null;
        this.fornecedor = new Fornecedor();
        this.centroCusto = new CentroCusto();
        this.formaPagamento = new FormaPagamento();
        this.parcelas = new Array<CompraParcela>();
        this.produtos = new Array<CompraProduto>();
        this.dataEntrada = null;
        this.notaFiscal = null;
    }

}

