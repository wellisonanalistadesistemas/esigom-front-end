import { EntradaProduto } from './entradaProduto';
import { Fornecedor } from './fornecedor';

export class Entrada {
    public id: number;
    public dataEntrada: Date;
    public notaFiscal: string;
    public fornecedor: Fornecedor;
    public valorEntrada: number;
    public qtdeProdutos: number;
    produtos = new Array<EntradaProduto>();

    constructor() {
        this.id = null;
        this.valorEntrada = null;
        this.notaFiscal = null;
        this.fornecedor = new Fornecedor();
        this.dataEntrada = null;
        this.qtdeProdutos = null;
        this.produtos = new Array<EntradaProduto>();
    }
}
