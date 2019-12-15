import { Perfil } from './perfil';

export class Usuario {
    public id: number;
    public login: string;
    public nome: string;
    public email: string;
    public senha: string;
    public dthInclusao: Date;
    perfis = new Array<Perfil>();

    constructor() {
        this.id = null;
        this.login = null;
        this.nome = null;
        this.email = null;
        this.senha = null;
        this.dthInclusao = null;
        this.perfis = [];
    }

}

