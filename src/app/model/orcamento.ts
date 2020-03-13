import { Cliente } from './cliente';
import { OrcamentoProduto } from './orcamentoProduto';
import { OrcamentoServico } from './OrcamentoServico';
import { OrcamentoParcela } from './OrcamentoParcela';

export class Orcamento {
    public id: number;
    public veiculoPlaca: string;
    public marca: string;
    public cor: string;
    public modelo: string;
    public km: string;
    public ano: number;
    public obs: string;
    public dataInclusao: Date;
    public cliente: Cliente;
    public codStatus: number;
    produtos = new Array<OrcamentoProduto>();
    servicos = new Array<OrcamentoServico>();
    parcelas = new Array<OrcamentoParcela>();

    constructor() {
        this.id = null;
        this.veiculoPlaca = null;
        this.marca = null;
        this.cor = null;
        this.modelo = null;
        this.km = null;
        this.ano = null;
        this.obs = null;
        this.dataInclusao = new Date();
        this.cliente = new Cliente();
        this.codStatus = 1;
        this.servicos = new Array<OrcamentoServico>();
        this.produtos = new Array<OrcamentoProduto>();
        this.parcelas = new Array<OrcamentoParcela>();
    }
}