import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProdutoService } from 'src/app/services/produto';
import { ServicoBuscaEntity } from '../servicos/servicos.component';
import { EntradaService } from 'src/app/services/entrada.service';
import { Entrada } from 'src/app/model/entrada';
import { EntradaProduto } from 'src/app/model/entradaProduto';

@Component({
  selector: 'app-entrada-produto',
  templateUrl: './entrada-produto.component.html',
  styleUrls: ['./entrada-produto.component.scss']
})

export class EntradaProdutoComponent implements OnInit {
  constructor(
    private _produtoService: ProdutoService,
    private _entradaService: EntradaService,
    private cd: ChangeDetectorRef,
    private toastr: ToastrService,
    private modalService: NgbModal) { }

  buscaForm = ({}) as EntradaBuscaEntity;
  listaEntradas: any;
  paginaAtual: any;
  modalConfirmacao: any;
  idExcluir: any;
  closeResult: string;
  listaProdutosEntrada: any;
  listaEntradaProdutos: any;
  public entradaProduto = new EntradaProduto();
  public entradaVisualizada = new Entrada();
  public valorTotalProdutos = 0;
  public valorTotalPago = 0;

  ngOnInit() {
    this.novoForm();
    this.buscarEntradas(false);
  }

  novoForm() {
    this.buscaForm = new ServicoBuscaEntity();
    this.buscaForm.offset = 0;
    this.buscaForm.limit = 10;
    this.buscaForm.coluna = "id";
    this.buscaForm.tipoOrdenacao = "desc";
  }

  // Iniciar Form
  iniciarForm() {
    this.novoForm;
    this.buscarEntradas(false);
  }
  public buscarEntradas(modalIsOpen) {
    this._entradaService.pesquisar(this.buscaForm).subscribe(data => {
      this.listaEntradas = data;
      if (modalIsOpen) {
        this.atualizarValoresModal(this.listaEntradas);
      }
    });
  }

  public atualizarValoresModal(data) {
    let obj = data.lista.find(t => t.id === this.entradaVisualizada.id);
    this.valorTotalProdutos = Number(obj.qtdeProdutos);
    this.valorTotalPago = Number(obj.valorEntrada);
  }

  // Abrir Modal
  public abrirModalObterProdutos(it, template, size) {
    // valores iniciais
    this.valorTotalProdutos = it.qtdeProdutos;
    this.valorTotalPago = it.valorEntrada;
    this._produtoService.getAll().subscribe(
      data => this.listaEntradaProdutos = data
    );
    this.entradaProduto = new EntradaProduto();
    this.entradaVisualizada = it;
    this._entradaService.obterListaProdutosEntrada(it.id).subscribe(data => {
      this.listaProdutosEntrada = data;
      this.modalService.open(template, { size: size, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Dismissed ${this.excluir(it.id)}`;
      }, (reason) => {
        this.closeResult = `Closed with: ${reason}`;
      });
    });
  }

  // Adicionar
  public adicionarProduto() {
    this.entradaProduto.entrada = this.entradaVisualizada;
    this._entradaService.adicionarProdutoEntrada(this.entradaProduto).subscribe(data => {
      // Após adicionar atualizar lista
      this._entradaService.obterListaProdutosEntrada(this.entradaProduto.entrada.id).subscribe(data => {
        this.listaProdutosEntrada = data;
        this.toastr.success('Adicionado com sucesso.');
        if (data) {
          this.entradaProduto = new EntradaProduto();
          this.buscarEntradas(true);
        }
      });
    });
  }

  // Edição
  public editarEntradaProduto(it) {
    if (it.desabilitarEdicao) {
      it.desabilitarEdicao = false;
    } else {
      this._entradaService.adicionarProdutoEntrada(it).subscribe(data => {
        this.toastr.success('Alteração realizada com sucesso.');
        this.buscarEntradas(true);
      });
      it.desabilitarEdicao = true;
 
    }
  }


  // Selecionar Produto
  public selecionarProduto(produto) {
    this.entradaProduto.produto = produto;
  }
  // Exclusão
  public excluirProdutoEntrada(entradaProduto) {
    this._entradaService.excluirProdutoEntrada(entradaProduto.id).subscribe(data => {
      this._entradaService.obterListaProdutosEntrada(entradaProduto.entrada.id).subscribe(data => {
        this.listaProdutosEntrada = data;
        this.toastr.success('Produto excluído com sucesso.');
        this.buscarEntradas(true);
      });
    });

  }

  // Ordenação
  public ordenar(params) {
    this.buscaForm.coluna = params;
    if (this.buscaForm.tipoOrdenacao === 'desc') {
      this.buscaForm.tipoOrdenacao = "asc"
    } else {
      this.buscaForm.tipoOrdenacao = "desc"
    }
    this.buscarEntradas(false);
  }

  // Paginação
  public paginar(params) {
    this.buscaForm.offset = (params.page - 1);
    this.paginaAtual = params.page;
    this.buscarEntradas(false);
  }

  // Abrir Modal de Exclusão de Entrada
  public abrirModalExclusao(Id, template) {
    this.modalService.open(template, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.excluir(Id)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }
  public excluir(id) {
    this._entradaService.excluir(id).subscribe(data => {
      this.buscarEntradas(false);
      this.toastr.success('Entrada excluída com sucesso.');
    });
  }
}

// Class Busca
export class EntradaBuscaEntity {
  offset: number;
  limit: number;
  coluna?: string;
  tipoOrdenacao?: string;
  descricao: number;
}
