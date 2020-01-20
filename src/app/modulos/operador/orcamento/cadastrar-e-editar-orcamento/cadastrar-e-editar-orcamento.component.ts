import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
import { OrcamentoProduto } from 'src/app/model/orcamentoProduto';
import { OrcamentoServico } from 'src/app/model/OrcamentoServico';

@Component({
  selector: 'app-cadastrar-e-editar-orcamento',
  templateUrl: './cadastrar-e-editar-orcamento.component.html',
  styleUrls: ['./cadastrar-e-editar-orcamento.component.scss']
})
export class CadastrarEEditarOrcamentoComponent {
  public msgAction: string;
  public objeto = new Orcamento;
  public cliente: any;
  public orcamentoProduto = new OrcamentoProduto();
  public orcamentoServico = new OrcamentoServico();
  public closeResult: string;
  public formaPagamento = new FormaPagamento();
  public formasPagamento: any;
  public listaOrcamentoProdutos: any;
  public listaOrcamentoServicos: any;
  // Total
  public valorTotalGeral = 0;
  public valorTotalProdutos = 0;
  public valorTotalServicos = 0;

  constructor(private http: HttpClient,
    private cd: ChangeDetectorRef, private _produtoService: ProdutoService, private _servicoService: ServicoService, private modalService: NgbModal, private _formaPagamentoService: FormaPagamentoService, private _clienteService: ClienteService, private _orcamentoService: OrcamentoService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Obter Formas de pagamento
    this._formaPagamentoService.pesquisar().subscribe(data => {
      this.formasPagamento = data
    });
    // Obter pelo ID
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this._orcamentoService.buscarPeloId(params.id).subscribe(data => this.objeto = data);
      }
    })
  }

  public aplicarAcaoOrcamento(parametro) {
    this.objeto.codStatus = parametro;
    console.log(this.objeto);
  }

  public adicionarFormaPagamento(obj) {
    // Se já existe, remover
    const index = this.objeto.formasPagamento.indexOf(obj);
    if (index != -1) {
      this.objeto.formasPagamento.splice(index, 1)
    } else {
      // Senão adicionar
      this.formaPagamento = new FormaPagamento();
      this.formaPagamento = obj;
      this.objeto.formasPagamento.push(this.formaPagamento);
    }
    console.log(this.objeto);
  }

  abrirModal(template, size, param) {
    if (param) {
      // Obter Lista de Produtos
      this._produtoService.getAll().subscribe(data => this.listaOrcamentoProdutos = data);
      this.orcamentoProduto = new OrcamentoProduto();
    } else {
      // Obter Lista de Serviços
      this._servicoService.getAll().subscribe(data => this.listaOrcamentoServicos = data);
      this.orcamentoServico = new OrcamentoServico();
    }

    this.modalService.open(template, { size: size, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.adicionar(param)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  selecionarProdutoOuServico(objSelecionado, param) {
    if (param) {
      this.orcamentoServico.servico = objSelecionado;
    } else {
      this.orcamentoProduto.produto = objSelecionado;
    }
  }

  // Adicionar e Somar
  adicionar(param) {
    if (param) {
      this.objeto.produtos.push(this.orcamentoProduto);
      this.valorTotalProdutos += Number(this.orcamentoProduto.produto.valor * this.orcamentoProduto.quantidade);
    } else {
      this.objeto.servicos.push(this.orcamentoServico);
      this.valorTotalServicos += Number(this.orcamentoServico.servico.valor * this.orcamentoServico.quantidade);
    }
  }

  // Excluir e Subtrair da Soma
  excluir(it, param) {
    if (param) {
      const index = this.objeto.produtos.indexOf(it);
      this.objeto.produtos.splice(index, 1)
      this.valorTotalProdutos -= Number(this.orcamentoProduto.produto.valor * this.orcamentoProduto.quantidade);
    } else {
      const index = this.objeto.servicos.indexOf(it);
      this.objeto.servicos.splice(index, 1)
      this.valorTotalServicos -= Number(this.orcamentoServico.servico.valor * this.orcamentoServico.quantidade);
    };
  }

  redirencionar(string) {
    this.toastr.success(string);
    this.router.navigate(['/operador/orcamentos']);
  }

  /* Buscar Cliente*/
  buscarCliente() {
    this._clienteService.buscarPeloCpf(this.objeto.cliente.cpf).subscribe((data: Cliente) => {
      if (data) {
        this.objeto.cliente = data;
      } else {
        // Inexistente
        this.objeto.cliente = new Cliente();
        this.toastr.error("CPF Inválido.");
      }
    });
  }

  salvarOuAlterar() {
    console.log(this.objeto);
    this._orcamentoService.salvar(this.objeto).subscribe(retorno => {
      if (!retorno) {
        //this.redirencionar('Orçamento cadastrado com sucesso.');
      } else {
        //this.toastr.error('Erro ao cadastrar.');
      }
    });
  }


}

