import { Component, ChangeDetectorRef } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Orcamento } from 'src/app/model/orcamento';
import { Produto } from 'src/app/model/produto';
import { Servico } from 'src/app/model/servico';
import { OrcamentoService } from 'src/app/services/orcamento.service';
import { FormaPagamento } from 'src/app/model/formaPagamento';
import { FormaPagamentoService } from 'src/app/services/formaPagamento';
import { ProdutoService } from 'src/app/services/produto';
import { ServicoService } from 'src/app/services/servico';
import { Entrada } from 'src/app/model/entrada';
import { EntradaProduto } from 'src/app/model/entradaProduto';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { EntradaService } from 'src/app/services/entrada.service';

@Component({
  selector: 'app-cadastrar-editar-entrada-produto',
  templateUrl: './cadastrar-editar-entrada-produto.component.html',
  styleUrls: ['./cadastrar-editar-entrada-produto.component.scss']
})

export class CadastrarEditarEntradaProdutoComponent {
  public msgAction: string;
  public objeto = new Entrada;
  public entradaProduto = new EntradaProduto();
  public closeResult: string;
  public listaEntradaProdutos: any;
  public listFornecedores: any;
  public quantidade = 0;

  // Total
  public valorTotalGeral = 0;
  public valorTotalProdutos = 0;
  public qtdeTotalProdutos = 0;

  constructor(private http: HttpClient,
    private cd: ChangeDetectorRef, private _fornecedorService: FornecedorService, private _produtoService: ProdutoService, private _entradaService: EntradaService, private modalService: NgbModal, private _formaPagamentoService: FormaPagamentoService, private _clienteService: ClienteService, private _orcamentoService: OrcamentoService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Obter Formas de pagamento
    this._fornecedorService.getAllNaoPaginado().subscribe(data => {
      this.listFornecedores = data
    });

    // Obter pelo ID
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this._entradaService.buscarPeloId(params.id).subscribe(
          data => {
            this.objeto = data;
          }
        );
      };
    });
  }

  public selecionarFornecedor() {

  }

  abrirModal(template, size) {
    this._produtoService.getAll().subscribe(data => this.listaEntradaProdutos = data);
    this.entradaProduto = new EntradaProduto();
    this.modalService.open(template, { size: size, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.adicionar()}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  adicionar() {
    this.objeto.produtos.push(this.entradaProduto);
    this.valorTotalProdutos += Number(this.entradaProduto.valorUnitario * this.entradaProduto.quantidade);
    this.qtdeTotalProdutos += Number(this.entradaProduto.quantidade);
  }

  selecionarProduto(item) {
    this.entradaProduto.produto = item;
  }

  excluir(it) {
    const index = this.objeto.produtos.indexOf(it);
    this.objeto.produtos.splice(index, 1);
    this.valorTotalProdutos -= Number(it.valorUnitario * it.quantidade);
    this.qtdeTotalProdutos -= Number(it.quantidade);
  }

  salvarOuAlterar() {

    console.log(this.objeto);
    // this._entradaService.salvar(this.objeto).subscribe(retorno => {
    //   if (!retorno && !this.objeto.id) {
    //     this.redirencionar('Registo cadastrado com sucesso.');
    //   } else if (!retorno && this.objeto.id) {
    //     this.redirencionar('Registo editado com sucesso.');
    //   } else {
    //     this.toastr.error('Erro ao cadastrar.');
    //   }
    // });
  }

  redirencionar(string) {
    this.toastr.success(string);
    this.router.navigate(['/operador/entrada-produtos']);
  }
}