export class ContaParcela {

    public id: number;
    public situacao: number;
    public conta: any
    public dataVencimento: Date;
    public valor: number;
    public ordem: number;
    public descricao: string;

    constructor() {
        this.id = null;
        this.ordem = null;
        this.conta = null;
        this.dataVencimento = null;
        this.valor = null;
        this.descricao = null;
        this.situacao = 1;
    }
}

