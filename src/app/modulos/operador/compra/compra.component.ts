import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicoBuscaEntity } from '../servicos/servicos.component';
import { CompraService } from 'src/app/services/compra.service';
import { CompraParcela } from 'src/app/model/compraParcela';
import { BsLocaleService, defineLocale, ptBrLocale, BsDatepickerConfig } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})

export class CompraComponent implements OnInit {
  constructor(
    private _compraService: CompraService,
    private cd: ChangeDetectorRef,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private localeService: BsLocaleService
  ) {
    defineLocale('ptbr', ptBrLocale);
    this.localeService.use('ptbr');
  }
  buscaForm = ({}) as OrcamentoBuscaEntity;
  listaCompras: any;
  paginaAtual: any;
  modalConfirmacao: any;
  idExcluir: any;
  closeResult: string;
  public listaParcelasCompra: any;
  habilitarSalvarDados;

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

  public editarParcela(it) {
    if (it.desabilitarEdicao) {
      it.desabilitarEdicao = false;
    } else {
      it.desabilitarEdicao = true;
    }

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

  public abrirModalParcelas(Id, template, size) {
    this.habilitarSalvarDados = false;
    this._compraService.obterListaParcelasCompra(Id).subscribe(data => {
      this.listaParcelasCompra = data;
    });
    this.modalService.open(template, { size: size, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.alterarDadosParcela()}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  public alterarDadosParcela() {
    this._compraService.alterarListaCompraParcela(this.listaParcelasCompra).subscribe(data => {
      this.buscarCompras();
      this.toastr.success('Informações atualizadas com sucesso.');
    });
  }

  public habilitarBotaoSalvar() {
    this.habilitarSalvarDados = true;
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

      if (data) {
        this.toastr.success('Compra excluída com sucesso.');
        this.buscarCompras();
      }

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


