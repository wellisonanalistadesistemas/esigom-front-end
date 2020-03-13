import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Compra } from 'src/app/model/compra';
import { CompraService } from 'src/app/services/compra.service';
import { CentroCustoService } from 'src/app/services/centroCusto.service';
import { FormaPagamentoService } from 'src/app/services/formaPagamento';
import { BsLocaleService, defineLocale, ptBrLocale } from 'ngx-bootstrap';
import { ProdutoService } from 'src/app/services/produto';
import { CompraProduto } from 'src/app/model/compraProduto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompraParcela } from 'src/app/model/compraParcela';
import { FormaPagamento } from 'src/app/model/FormaPagamento';


@Component({
  selector: 'app-cadastrar-e-editar-compra',
  templateUrl: './cadastrar-e-editar-compra.component.html',
  styleUrls: ['./cadastrar-e-editar-compra.component.scss']
})

export class CadastrarEEditarCompraComponent implements OnInit {
  public objeto = new Compra;
  public visualizar: boolean;
  public listaFornecedores;
  public closeResult: string;
  public listaCentroDeCustos;
  public listaFormasPagamento;
  public compraProduto = new CompraProduto();
  public listaCompraProdutos: any;
  public listaParcelaments: any;
  public compraParcela = new CompraParcela();
  public valorTotalProdutos = 0;
  public valorTotalParcelas = 0;
  public parcelamento = false;
  public formaPagamento;

  public rotaVisualizar = false;

  constructor(
    private localeService: BsLocaleService,
    public _fornecedorService: FornecedorService,
    public _centroCustoService: CentroCustoService,
    public _formaPagamentoService: FormaPagamentoService,
    public _compraService: CompraService,
    public _produtoService: ProdutoService,
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private modalService: NgbModal
  ) {
    // componente de data
    defineLocale('ptbr', ptBrLocale);
    this.localeService.use('ptbr');
  }

  ngOnInit() {

    this._formaPagamentoService.pesquisar().subscribe(data => this.listaFormasPagamento == data);
    // checa se é edição
    this._route.params.subscribe(params => {
      if (params.id != null) {
        this._compraService.buscarPeloId(params.id).subscribe(data => this.objeto = data);
      }
    });

    this._route.url.subscribe(url => {
      if (url[0].path == "visualizar") {
        this.rotaVisualizar = true;
      }
    })
    this.obterListasDropdowns();

  }
  abrirModalAdicionarProduto(template, size) {
    this._produtoService.getAll().subscribe(data => this.listaCompraProdutos = data);
    this.compraProduto = new CompraProduto();
    this.modalService.open(template, { size: size, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.adicionarProduto()}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  public adicionarProduto() {
    this.objeto.produtos.push(this.compraProduto);
    this.valorTotalProdutos += Number(this.compraProduto.valorUnidade * this.compraProduto.quantidade);
  }

  // Selecionar Produto (Modal)
  public selecionarProduto(produto) {
    this.compraProduto.produto = produto;
  }

  public selecionarCentroCusto(centroCusto) {
    this.objeto.centroCusto = centroCusto;
  }

  public excluirProduto(produto) {
    const index = this.objeto.produtos.indexOf(produto);
    this.objeto.produtos.splice(index, 1)
    // ao localizar
    if (!this.objeto.id) {
      this.valorTotalProdutos -= Number(this.compraProduto.valorUnidade * this.compraProduto.quantidade);
    }
  }

  public adicionarParcela() {
    this.objeto.parcelas.push(this.compraParcela);
    this.valorTotalParcelas += Number(this.compraParcela.valor);
    // novo objeto
    this.compraParcela = new CompraParcela();
  }

  public selecionarFornecedor(fornecedor) {
    this.objeto.fornecedor = fornecedor;
  }

  public excluirParcela(parcela) {
    const index = this.objeto.parcelas.indexOf(parcela);
    // ao localizar
    if (index != null) {
      this.valorTotalParcelas -= Number(parcela.valor);
      this.objeto.parcelas.splice(index, 1)
    }
  }

  public selecionarFormaPagamento(formaPagamento) {
    this.objeto.formaPagamento = formaPagamento;
  }

  public aplicarTipoPagamentoVenda(option) {
    this.parcelamento = option;
    if (option) {
      this.compraParcela = new CompraParcela();
    }
  }

  obterListasDropdowns() {
    this._fornecedorService.getAllNaoPaginado().subscribe(data => {
      this.listaFornecedores = data;
    })
    this._centroCustoService.getAll().subscribe(data => {
      this.listaCentroDeCustos = data;
    })
    this._formaPagamentoService.pesquisar().subscribe(data => {
      this.listaFormasPagamento = data;
    })
  }


  public salvarOuAlterar() {
    if (this.objeto.id) {
      this._compraService.alterar(this.objeto.id, this.objeto)
        .subscribe(retorno => {
          if (!retorno) {
            this._router.navigate(['/operador/compras']);
            this._toastr.success('Compra editada com sucesso.');
          } else {
            this._toastr.error('Erro ao cadastrar.');
          }
        });
    } else {
      this._compraService.salvar(this.objeto).subscribe(retorno => {
        if (!retorno) {
          this._router.navigate(['/operador/compras']);
          this._toastr.success('Compra cadastrada com sucesso.');
        } else {
          this._toastr.error('Erro ao cadastrar.');
        }
      });
    }
  }


}

