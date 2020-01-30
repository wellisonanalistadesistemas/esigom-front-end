import { ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfilService } from 'src/app/services/perfil.service';
import { ServicoService } from 'src/app/services/servico';
import { ProdutoService } from 'src/app/services/produto';
import { ServicoBuscaEntity } from '../servicos/servicos.component';
import { CaixaService } from 'src/app/services/caixa.service';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.scss']
})

export class CaixaComponent implements OnInit {
  constructor(private _caixaService: CaixaService, private cd: ChangeDetectorRef, private toastr: ToastrService, private modalService: NgbModal) { }

  buscaForm = ({}) as CaixaBuscaEntity;
  listCaixa: any;
  paginaAtual: any;
  modalConfirmacao: any;
  idExcluir: any;
  closeResult: string;

  ngOnInit() {
    this.novoForm();
    this.buscarRegistrosCaixas();
  }

  novoForm() {
    this.buscaForm = new CaixaBuscaEntity();
    this.buscaForm.offset = 0;
    this.buscaForm.limit = 10;
    this.buscaForm.coluna = "id";
    this.buscaForm.tipoOrdenacao = "desc";
  }

  iniciarForm() {
    this.novoForm;
    this.buscarRegistrosCaixas();
  }

  buscarRegistrosCaixas() {
    this._caixaService.pesquisar(this.buscaForm).subscribe(data => {
      this.listCaixa = data;
    });
  }

  public ordenar(params) {
    this.buscaForm.coluna = params;
    if (this.buscaForm.tipoOrdenacao === 'desc') {
      this.buscaForm.tipoOrdenacao = "asc"
    } else {
      this.buscaForm.tipoOrdenacao = "desc"
    }
    this.buscarRegistrosCaixas();
  }

  public paginar(params) {
    this.buscaForm.offset = (params.page - 1);
    this.paginaAtual = params.page;
    this.buscarRegistrosCaixas();
  }
}

export class CaixaBuscaEntity {
  offset: number;
  limit: number;
  coluna?: string;
  tipoOrdenacao?: string;
  descricao: number;
}
