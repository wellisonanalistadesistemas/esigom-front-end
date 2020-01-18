import { Produto } from './produto';
import { Servico } from './servico';
import { Cliente } from './cliente';

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
        this.cliente = null;
        this.codStatus = null;
        this.formaPagamento = null;
        this.produtos = [];
        this.servicos = [];
    }

}

