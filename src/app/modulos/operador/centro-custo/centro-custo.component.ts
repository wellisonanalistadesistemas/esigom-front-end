import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CentroCustoService } from 'src/app/services/centroCusto.service';

@Component({
  selector: 'app-centro-custo',
  templateUrl: './centro-custo.component.html',
  styleUrls: ['./centro-custo.component.scss']
})

export class CentroCustoComponent implements OnInit {
  constructor(private _centroCustoService: CentroCustoService, private cd: ChangeDetectorRef, private toastr: ToastrService, private modalService: NgbModal) { }

  buscaForm = ({}) as CentroCustoBuscaEntity;
  listaCentrosCustos: any;
  paginaAtual: any;
  modalConfirmacao: any;
  idExcluir: any;
  closeResult: string;

  ngOnInit() {
    this.novoForm();
    this.buscarCentrosDeCusto();
  }

  novoForm() {
    this.buscaForm = new CentroCustoBuscaEntity();
    this.buscaForm.offset = 0;
    this.buscaForm.limit = 10;
    this.buscaForm.coluna = "id";
    this.buscaForm.tipoOrdenacao = "desc";
  }

  iniciarForm() {
    this.novoForm;
    this.buscarCentrosDeCusto();
  }

  buscarCentrosDeCusto() {
    this._centroCustoService.pesquisar(this.buscaForm).subscribe(data => {
      this.listaCentrosCustos = data;
    });
  }

  public ordenar(params) {
    this.buscaForm.coluna = params;
    if (this.buscaForm.tipoOrdenacao === 'desc') {
      this.buscaForm.tipoOrdenacao = "asc"
    } else {
      this.buscaForm.tipoOrdenacao = "desc"
    }
    this.buscarCentrosDeCusto();
  }

  public paginar(params) {
    this.buscaForm.offset = (params.page - 1);
    this.paginaAtual = params.page;
    this.buscarCentrosDeCusto();
  }

  public abrirModalExclusao(Id, template) {
    this.modalService.open(template, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.excluir(Id)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  public excluir(id) {
    this._centroCustoService.excluir(id).subscribe(data => {
      this.buscarCentrosDeCusto();
      this.toastr.success('Serviço excluído com sucesso.');
    });
  }
}

export class CentroCustoBuscaEntity {
  offset: number;
  limit: number;
  coluna?: string;
  tipoOrdenacao?: string;
  descricao: number;
}
