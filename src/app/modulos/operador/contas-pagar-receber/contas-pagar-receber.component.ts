import { ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/services/cliente.service';
import { ContaService } from 'src/app/services/conta.service.';
import { Conta } from 'src/app/model/conta';
import { ContaParcela } from 'src/app/model/contaParcela';


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
  objContaInformarPagamento = new ContaParcela();
  textoModalReaproveitada: string;
  exclusao: boolean;

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


  public abrirModalCancelarPagamentoOuDelete(objeto, template) {
    if (objeto.acao == 'exclusao') {
      this.exclusao = true;
      this.textoModalReaproveitada = "Deseja realmente excluir a conta selecionada?";
    } else if (objeto.acao == 'remocaoPagamento') {
      this.objContaInformarPagamento = objeto.it;
      this.exclusao = false;
      this.textoModalReaproveitada = "Deseja realmente cancelar o pagamento realizado?";
    }
    this.modalService.open(template, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.excluirOuCancelarPagamento(objeto)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  public excluirOuCancelarPagamento(objeto) {
    if (this.exclusao) {
      this._contaService.excluir(objeto.it.id).subscribe(data => {
        this.toastr.success('Conta excluída com sucesso.');
        this.buscarContas();
      });
    } else {
      // Situação "Em Aberto"
      this.objContaInformarPagamento.situacao = 1;
      this.objContaInformarPagamento.dataPagamento = null;
      this.objContaInformarPagamento.valorPago = null;
      this._contaService.alterarContaParcela(this.objContaInformarPagamento.id, this.objContaInformarPagamento).subscribe(data => {
        this.toastr.success('Pagamento cancelado com sucesso.');
        this.buscarContas();
      });
    }

  }


  public abrirModalInformarPagamento(obj, size, template) {
    if (obj != null) {
      this.objContaInformarPagamento = obj;
    }
    this.modalService.open(template, { size: size, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.informarPagamento()}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  public informarPagamento() {
    this.objContaInformarPagamento.situacao = 2;
    this._contaService.alterarContaParcela(this.objContaInformarPagamento.id, this.objContaInformarPagamento).subscribe(data => {
      this.buscarContas();
      this.toastr.success('Pagamento informado com sucesso.');
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