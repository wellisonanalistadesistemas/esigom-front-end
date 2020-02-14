import { ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicoBuscaEntity } from '../servicos/servicos.component';
import { OrdemServicoService } from 'src/app/services/ordemServico';

@Component({
  selector: 'app-ordem-servico',
  templateUrl: './ordem-servico.component.html',
  styleUrls: ['./ordem-servico.component.scss']
})

export class OrdemServicoComponent implements OnInit {
  constructor(private _ordemServicoService: OrdemServicoService, private cd: ChangeDetectorRef, private toastr: ToastrService, private modalService: NgbModal) { }

  buscaForm = ({}) as OrdemServicoBuscaEntity;
  listaOrdensServicos: any;
  paginaAtual: any;
  modalConfirmacao: any;
  idExcluir: any;
  closeResult: string;
  titleModalCompartilhada: string;

  ngOnInit() {
    this.novoForm();
    this.buscarOrdensDeServicos();
  }

  novoForm() {
    this.buscaForm = new ServicoBuscaEntity();
    this.buscaForm.offset = 0;
    this.buscaForm.limit = 10;
    this.buscaForm.coluna = "id";
    this.buscaForm.tipoOrdenacao = "desc";
  }

  iniciarForm() {
    this.novoForm;
    this.buscarOrdensDeServicos();
  }

  buscarOrdensDeServicos() {
    this._ordemServicoService.pesquisar(this.buscaForm).subscribe(data => {
      this.listaOrdensServicos = data;
    });
  }

  public ordenar(params) {
    this.buscaForm.coluna = params;
    if (this.buscaForm.tipoOrdenacao === 'desc') {
      this.buscaForm.tipoOrdenacao = "asc"
    } else {
      this.buscaForm.tipoOrdenacao = "desc"
    }
    this.buscarOrdensDeServicos();
  }

  public paginar(params) {
    this.buscaForm.offset = (params.page - 1);
    this.paginaAtual = params.page;
    this.buscarOrdensDeServicos();
  }

  public abrirModalAlteracaoStatus(obj, template) {
    this.titleModalCompartilhada = 'Deseja Realmente Alterar a Situação da Ordem de Serviço de Número: ' + obj.id + ' para "A Realizar"?';
    this.modalService.open(template, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.realizarAlteracaoStatus(obj)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  public realizarAlteracaoStatus(obj) {
    obj.codStatus = 1;
    this._ordemServicoService.alterar(obj.id, obj).subscribe(data => {
      this.buscarOrdensDeServicos();
      this.toastr.success('Status alterado com sucesso.');
    });
  }
}

export class OrdemServicoBuscaEntity {
  offset: number;
  limit: number;
  coluna?: string;
  tipoOrdenacao?: string;
  descricao: number;
}
