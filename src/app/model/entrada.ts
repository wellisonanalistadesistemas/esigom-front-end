import { Cliente } from './cliente';
import { FormaPagamento } from './formaPagamento';
import { OrcamentoProduto } from './orcamentoProduto';
import { OrcamentoServico } from './OrcamentoServico';
import { EntradaProduto } from './entradaProduto';

export class Entrada {
    public id: number;
    public dataEntrada: Date;
    public notaFiscal: string;
    produtos = new Array<EntradaProduto>();

    constructor() {
        this.id = null;
        this.notaFiscal = null;
        this.dataEntrada = null;
        this.produtos = new Array<EntradaProduto>();
    }
}
