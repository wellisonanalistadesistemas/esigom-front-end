import { Endereco } from './endereco';
import { Telefone } from './telefone';

export class Cliente {
    public id: number;
    public nome: string;
    public cpf: string;
    public dataNascimento: Date;
    public email: string;
    enderecos = new Array<Endereco>();
    telefones = new Array<Telefone>();

    constructor() {
        this.id = null;
        this.nome = null;
        this.cpf = null;
        this.dataNascimento = null;
        this.email = null;
        this.enderecos = [];
        this.telefones = [];
    }

}

