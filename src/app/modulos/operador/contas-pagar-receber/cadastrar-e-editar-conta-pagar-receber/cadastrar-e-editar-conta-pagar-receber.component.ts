import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/model/conta';
import { ContaService } from 'src/app/services/conta.service.';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { defineLocale, BsLocaleService, ptBrLocale } from 'ngx-bootstrap';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { CentroCustoService } from 'src/app/services/centroCusto.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/model/cliente';
import { Fornecedor } from 'src/app/model/fornecedor';
import { ContaParcela } from 'src/app/model/contaParcela';

@Component({
  selector: 'app-cadastrar-e-editar-conta-pagar-receber',
  templateUrl: './cadastrar-e-editar-conta-pagar-receber.component.html',
  styleUrls: ['./cadastrar-e-editar-conta-pagar-receber.component.scss']
})
export class CadastrarEEditarContaPagarReceberComponent implements OnInit {

  public objeto = new Conta;
  public visualizar: boolean;
  public contaPagar = true;
  public parcela = new ContaParcela();
  public listaCentroDeCustos;
  public listaFornecedores;

  public quantidadeParcelas = 0;
  public valorTotal = 0;

  constructor(
    public localeService: BsLocaleService,
    public _contaService: ContaService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    public _fornecedorService: FornecedorService,
    public _clienteService: ClienteService,
    public _centroCustoService: CentroCustoService) {
    defineLocale('ptbr', ptBrLocale);
    this.localeService.use('ptbr');
  }

  ngOnInit() {
    this.obterListasDropdowns();
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this._contaService.buscarPeloId(params.id).subscribe(data => {
          this.objeto = data;
          this.objeto.parcelas.forEach(obj => {
            this.valorTotal += Number(obj.valor);
            this.quantidadeParcelas += 1;
          });
          if (this.objeto.cliente) {
            this.contaPagar = false;
          }
        });
      }
    })
  }

  selecionarCentroCusto(centroCusto) {
    this.objeto.centroCusto = centroCusto;
  }

  buscarCliente() {
    this._clienteService.buscarPeloCpf(this.objeto.cliente.cpf).subscribe((data: Cliente) => {
      if (data) {
        this.objeto.cliente = data;
      } else {
        this.objeto.cliente = new Cliente();
        this.toastr.error("CPF Inválido.");
      }
    });
  }

  public adicionarParcela() {
    this.objeto.parcelas.push(this.parcela);
    this.valorTotal += Number(this.parcela.valor);
    this.quantidadeParcelas += 1;
    this.parcela = new ContaParcela();
  }

  public excluirParcela(parcela) {
    const index = this.objeto.parcelas.indexOf(parcela);
    if (index != null) {
      this.valorTotal -= Number(parcela.valor);
      this.quantidadeParcelas -= 1;
      this.objeto.parcelas.splice(index, 1)
    }
  }

  public aplicarTipoConta(tipo) {
    if (!tipo) {
      this.objeto.tipo = 2;
      this.objeto.fornecedor = null;
      this.objeto.cliente = new Cliente();
      this.contaPagar = false;
    } else {
      this.objeto.cliente = null;
      this.objeto.fornecedor = new Fornecedor();
      this.objeto.tipo = 1;
      this.contaPagar = true;
    }
  }

  selecionarFornecedor(fornecedor) {
    this.objeto.fornecedor = fornecedor;
  }


  obterListasDropdowns() {
    this._fornecedorService.getAllNaoPaginado().subscribe(data => {
      this.listaFornecedores = data;
    })
    this._centroCustoService.getAll().subscribe(data => {
      this.listaCentroDeCustos = data;
    })
  }

  salvarOuAlterar() {
    if (this.objeto.id) {
      this._contaService.alterar(this.objeto.id, this.objeto).subscribe(retorno => {
        if (retorno) {
          this.toastr.success("Conta editada com sucesso.");
          this.router.navigate(['/operador/contas-a-pagar-receber']);
        }
      });
    } else {
      this._contaService.salvar(this.objeto).subscribe(retorno => {
        if (!retorno && !this.objeto.id) {
          this.toastr.success("Conta registrada com sucesso.");
          this.router.navigate(['/operador/contas-a-pagar-receber']);
        }
      });
    }
  }
}

