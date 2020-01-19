import { Produto } from './produto';
import { Servico } from './servico';
import { Cliente } from './cliente';
import { FormaPagamento } from './formaPagamento';

export class Orcamento {
    public id: number;
    public veiculoPlaca: string;
    public marca: string;
    public cor: string;
    public modelo: string;
    public km: string;
    public ano: number;
    public obs: string;
    public gerouOs: boolean;
    public data: Date;
    public cliente: Cliente;
    public codStatus: number;
    public formaPagamento: number;
    produtos = new Array<Produto>();
    servicos = new Array<Servico>();
    formasPagamento = new Array<FormaPagamento>();

    constructor() {
        this.id = null;
        this.veiculoPlaca = null;
        this.marca = null;
        this.cor = null;
        this.modelo = null;
        this.km = null;
        this.ano = null;
        this.obs = null;
        this.gerouOs = null;
        this.data = null;
        this.cliente = new Cliente();
        this.codStatus = 1;
        this.formaPagamento = null;
        this.produtos = [];
        this.servicos = [];
        this.formasPagamento = [];
    }
}
