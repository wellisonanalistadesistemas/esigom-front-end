import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { CentroCustoBuscaEntity } from '../centro-custo/centro-custo.component';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})

export class FornecedorComponent implements OnInit {
  constructor(private _fornecedorService: FornecedorService, private cd: ChangeDetectorRef, private toastr: ToastrService, private modalService: NgbModal) { }

  buscaForm = ({}) as FornecedorBuscaEntity;
  listaFornecedores: any;
  paginaAtual: any;
  modalConfirmacao: any;
  idExcluir: any;
  closeResult: string;

  ngOnInit() {
    this.novoForm();
    this.buscarListaFornecedores();
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
    this.buscarListaFornecedores();
  }

  buscarListaFornecedores() {
    this._fornecedorService.pesquisar(this.buscaForm).subscribe(data => {
      this.listaFornecedores = data;
    });
  }

  public ordenar(params) {
    this.buscaForm.coluna = params;
    if (this.buscaForm.tipoOrdenacao === 'desc') {
      this.buscaForm.tipoOrdenacao = "asc"
    } else {
      this.buscaForm.tipoOrdenacao = "desc"
    }
    this.buscarListaFornecedores();
  }

  public paginar(params) {
    this.buscaForm.offset = (params.page - 1);
    this.paginaAtual = params.page;
    this.buscarListaFornecedores();
  }

  public abrirModalExclusao(Id, template) {
    this.modalService.open(template, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.excluir(Id)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  public excluir(id) {
    this._fornecedorService.excluir(id).subscribe(data => {
      this.buscarListaFornecedores();
      this.toastr.success('Fornecedor excluído com sucesso.');
    });
  }
}

export class FornecedorBuscaEntity {
  offset: number;
  limit: number;
  coluna?: string;
  tipoOrdenacao?: string;
  descricao: number;
}

