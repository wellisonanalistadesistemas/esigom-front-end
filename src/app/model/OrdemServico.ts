import { Orcamento } from './orcamento';
import { Cliente } from './cliente';

export class OrdemServico {
    public id: number;
    public orcamento: Orcamento;
    public dataAbertura: Date;
    public dataEntrega: Date;
    public tempoGarantia: string;
    public codStatus: number;
    public relatorioTecnico: string;
    public levarPecaSubstituida: boolean;

    constructor() {
        this.id = null;
        this.orcamento = new Orcamento();
        this.dataAbertura = new Date();
        this.dataEntrega = null;
        this.tempoGarantia = null;
        this.codStatus = 1;
        this.relatorioTecnico = null;
        this.levarPecaSubstituida = false;
    }
}