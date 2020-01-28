import { ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/services/cliente.service';
import { ContaService } from 'src/app/services/conta.service.';


@Component({
  selector: 'app-contas-pagar-receber',
  templateUrl: './contas-pagar-receber.component.html',
  styleUrls: ['./contas-pagar-receber.component.scss']
})
export class ContasPagarReceberComponent implements OnInit {

  constructor(private _contaService: ContaService, private animateScrollService: NgAnimateScrollService,
    private cd: ChangeDetectorRef, private toastr: ToastrService, private modalService: NgbModal) { }

  buscaForm = ({}) as ContaBuscaEntity;
  listaContas: any;
  paginaAtual: any;
  modalConfirmacao: any;
  idExcluir: any;
  closeResult: string;

  ngOnInit() {
    this.novoForm();
    this.buscarContas();
  }

  novoForm() {
    this.buscaForm = new ContaBuscaEntity();
    this.buscaForm.offset = 0;
    this.buscaForm.limit = 10;
    this.buscaForm.coluna = "id";
    this.buscaForm.tipoOrdenacao = "desc";
  }

  iniciarForm() {
    this.novoForm;
    this.buscarContas();
  }

  buscarContas() {
    this._contaService.pesquisar(this.buscaForm).subscribe(data => {
      this.listaContas = data;
    });
  }

  public ordenar(params) {
    this.buscaForm.coluna = params;
    if (this.buscaForm.tipoOrdenacao === 'desc') {
      this.buscaForm.tipoOrdenacao = "asc"
    } else {
      this.buscaForm.tipoOrdenacao = "desc"
    }
    this.buscarContas();
  }

  public paginar(params) {
    // this.buscaForm.offset = 10 * (params.page - 1);
    this.buscaForm.offset = (params.page - 1);
    this.paginaAtual = params.page;
    this.buscarContas();
  }

  public abrirModalExclusao(Id, template) {
    this.modalService.open(template, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.excluir(Id)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  public excluir(id) {
    this._contaService.excluir(id).subscribe(data => {
      this.buscarContas();
      this.toastr.success('Conta excluída com sucesso.');
    });
  }
}

export class ContaBuscaEntity {
  offset: number;
  limit: number;
  coluna?: string;
  tipoOrdenacao?: string;
  descricao?: string;
  nome: number;
  login: string;
  dthInclusao: string;
  email: string;
}