import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { Telefone } from 'src/app/model/telefone';
import { Cliente } from 'src/app/model/cliente';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Cep } from 'src/app/model/cep';
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

@Component({
  selector: 'app-cadastrar-e-editar-orcamento',
  templateUrl: './cadastrar-e-editar-orcamento.component.html',
  styleUrls: ['./cadastrar-e-editar-orcamento.component.scss']
})
export class CadastrarEEditarOrcamentoComponent {
  public msgAction: string;
  public objeto = new Orcamento;
  public cliente: any;
  public produto = new Produto();
  public servico = new Servico();
  public closeResult: string;
  public formaPagamento = new FormaPagamento();
  public formasPagamento: any;
  public listaProdutos: any;
  public listaServicos: any;

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
      this._produtoService.getAll().subscribe(data => this.listaProdutos = data);
      this.produto = new Produto();
    } else {
      // Obter Lista de Serviços
      this._servicoService.getAll().subscribe(data => this.listaServicos = data);
      this.servico = new Servico();
    }

    this.modalService.open(template, { size: size, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.adicionar(param)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  selecionarProdutoOuServico(objSelecionado, param) {
    if (param) {
      this.servico = objSelecionado;
    } else {
      this.produto = objSelecionado;
    }
  }

  adicionar(param) {
    if (param) {
      this.objeto.produtos.push(this.produto);
    } else {
      this.objeto.servicos.push(this.servico);
    }
  }

  excluir(it, param) {
    if (param) {
      const index = this.objeto.produtos.indexOf(it);
      this.objeto.produtos.splice(index, 1)
    } else {
      const index = this.objeto.servicos.indexOf(it);
      this.objeto.servicos.splice(index, 1)
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
        // TODO:
        console.log("Não Encontrado");
      }
    });
  }

  salvarOuAlterar() {
    this._orcamentoService.salvar(this.objeto).subscribe(retorno => {
      if (!retorno) {
        this.redirencionar('Orçamento cadastrado com sucesso.');
      } else {
        this.toastr.error('Erro ao cadastrar.');
      }
    });
  }


}

