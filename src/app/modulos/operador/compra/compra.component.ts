import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicoBuscaEntity } from '../servicos/servicos.component';
import { CompraService } from 'src/app/services/compra.service';
import { CompraParcela } from 'src/app/model/compraParcela';
import { BsLocaleService, defineLocale, ptBrLocale, BsDatepickerConfig } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { CompraProduto } from 'src/app/model/compraProduto';

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
  desabilitarEdicao = false;
  idExcluir: any;
  closeResult: string;
  public listaParcelasCompra: any;
  public compraParcela = new CompraParcela();
  public compraVisualizada;
  habilitarSalvarDados;

  ngOnInit() {
    this.novoForm();
    this.buscarCompras(false);
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
    this.buscarCompras(false);
  }

  buscarCompras(modalIsOpen) {
    this._compraService.pesquisar(this.buscaForm).subscribe(data => {
      this.listaCompras = data;
      if (modalIsOpen) {
        this.atualizarValoresModal(this.listaCompras);
      }
    });
  }

  public atualizarValoresModal(data) {
    let obj = data.lista.find(t => t.id === this.compraVisualizada.id);
    // this.valorTotalProdutos = Number(obj.qtdeProdutos);
    // this.valorTotalPago = Number(obj.valorEntrada);
  }

  public ordenar(params) {
    this.buscaForm.coluna = params;
    if (this.buscaForm.tipoOrdenacao === 'desc') {
      this.buscaForm.tipoOrdenacao = "asc"
    } else {
      this.buscaForm.tipoOrdenacao = "desc"
    }
    this.buscarCompras(false);
  }

  public paginar(params) {
    this.buscaForm.offset = (params.page - 1);
    this.paginaAtual = params.page;
    this.buscarCompras(false);
  }

  public abrirModalContabilizarEmEstoque(Id, template) {
    this.modalService.open(template, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.incluirEmEstoque(Id)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  public abrirModalParcelas(it, template, size) {
    this.compraVisualizada = it;
    this._compraService.obterListaParcelasCompra(it.id).subscribe(data => {
      this.listaParcelasCompra = data;
    });
    this.modalService.open(template, { size: size, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.alterarDadosParcela()}`;
    }, (reason) => {
      this.compraParcela = new CompraParcela();
    });
  }

  public alterarDadosParcela() {
    this._compraService.alterarListaCompraParcela(this.listaParcelasCompra).subscribe(data => {
      this.buscarCompras(false);
      this.toastr.success('Informações atualizadas com sucesso.');
    });
  }

  public habilitarBotaoSalvar() {
    this.habilitarSalvarDados = true;
  }

  public adicionarParcela() {
    this.compraParcela.compra = this.compraVisualizada;
    this._compraService.adicionarAlterarCompraParcela(this.compraParcela).subscribe(data => {
      this._compraService.obterListaParcelasCompra(this.compraParcela.compra.id).subscribe(data => {
        this.listaParcelasCompra = data;
        this.toastr.success('Adicionado com sucesso.');
        if (data) {
          this.compraParcela = new CompraParcela();
          this.buscarCompras(true);
        }
      });
    });
  }

  public incluirEmEstoque(id) {
    this._compraService.incluirEmEstoque(id).subscribe(data => {
      if (data) {
        this.toastr.success('Inclusão realizada com sucesso.');
      } else {
        this.toastr.success('Erro ao incluir.');
      };
      this.buscarCompras(false);

    });
  }

  // Edição
  public editarCompraParcela(it) {
    if (it.desabilitarEdicao) {
      it.desabilitarEdicao = false;
    } else {
      this._compraService.adicionarAlterarCompraParcela(it).subscribe(data => {
        this.toastr.success('Alteração realizada com sucesso.');
        this.buscarCompras(true);
      });
      it.desabilitarEdicao = true;
    }
  }

  // Exclusão
  public excluirCompraParcela(it) {
    this._compraService.excluirCompraParcela(it.id).subscribe(data => {
      this._compraService.obterListaParcelasCompra(it.compra.id).subscribe(data => {
        this.listaParcelasCompra = data;
        this.toastr.success('Parcela excluída com sucesso.');
        this.buscarCompras(true);
      });
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
        this.buscarCompras(false);
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


