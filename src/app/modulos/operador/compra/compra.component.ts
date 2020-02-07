import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicoBuscaEntity } from '../servicos/servicos.component';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})

export class CompraComponent implements OnInit {
  constructor(private _compraService: CompraService, private cd: ChangeDetectorRef, private toastr: ToastrService, private modalService: NgbModal) { }

  buscaForm = ({}) as OrcamentoBuscaEntity;
  listaCompras: any;
  paginaAtual: any;
  modalConfirmacao: any;
  idExcluir: any;
  closeResult: string;

  ngOnInit() {
    this.novoForm();
    this.buscarCompras();
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
    this.buscarCompras();
  }

  buscarCompras() {
    this._compraService.pesquisar(this.buscaForm).subscribe(data => {
      this.listaCompras = data;
    });
  }

  public ordenar(params) {
    this.buscaForm.coluna = params;
    if (this.buscaForm.tipoOrdenacao === 'desc') {
      this.buscaForm.tipoOrdenacao = "asc"
    } else {
      this.buscaForm.tipoOrdenacao = "desc"
    }
    this.buscarCompras();
  }

  public paginar(params) {
    this.buscaForm.offset = (params.page - 1);
    this.paginaAtual = params.page;
    this.buscarCompras();
  }

  public abrirModalContabilizarEmEstoque(Id, template) {
    this.modalService.open(template, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.incluirEmEstoque(Id)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  public incluirEmEstoque(id) {
    this._compraService.incluirEmEstoque(id).subscribe(data => {
      if (data) {
        this.toastr.success('Inclusão realizada com sucesso.');
      } else {
        this.toastr.success('Erro ao incluir.');
      };
      this.buscarCompras();

    });
  }

  public abrirModalExclusao(Id, template) {
    this.modalService.open(template, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.excluir(Id)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  public excluir(id) {
    this._compraService.excluir(id).subscribe(data => {
      this.buscarCompras();
      this.toastr.success('Orçamento excluído com sucesso.');
    });
  }
}

export class OrcamentoBuscaEntity {
  offset: number;
  limit: number;
  coluna?: string;
  tipoOrdenacao?: string;
  descricao: number;
}


