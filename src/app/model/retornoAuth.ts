import { Role } from './role';

export class RetornoAuth {
    public access_token: string;
    public expires_in: number;
    public token_type: string;
    public login: string;
    public cod_pessoa: number;
    public nome: string;
    public img_perfil_base64: any;
    public funcao: string;
    public roles = new Array<Role>();

    constructor() {
        this.access_token = null;
        this.expires_in = null;
        this.token_type = null;
        this.login = null;
        this.cod_pessoa = null;
        this.nome = null;
        this.funcao = null;
        this.roles = new Array<Role>();
    }

}

