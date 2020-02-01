import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbMenuModule, NbListModule, NbButtonModule, NbRadioModule, NbSelectModule } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDropdownModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ToastrModule } from 'ngx-toastr';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { CadastrarEditarClienteComponent } from './clientes/cadastrar-e-editar-cliente/cadastrar-e-editar-cliente.component';
import { ListarClienteComponent } from './clientes/listar-cliente/listar-cliente.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ListarServicoComponent } from './servicos/listar-servico/listar-servico.component';
import { CadastrarEEditarServicoComponent } from './servicos/cadastrar-e-editar-servico/cadastrar-e-editar-servico.component';
import { ListarProdutoComponent } from './produtos/listar-produto/listar-produto.component';
import { CadastrarEEditarProdutoComponent } from './produtos/cadastrar-e-editar-produto/cadastrar-e-editar-produto.component';
import { ServicoComponent } from './servicos/servicos.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { CadastrarEEditarOrcamentoComponent } from './orcamento/cadastrar-e-editar-orcamento/cadastrar-e-editar-orcamento.component';
import { ListarOrcamentoComponent } from './orcamento/listar-orcamento/listar-orcamento.component';
import { OrdemServicoComponent } from './ordem-servico/ordem-servico.component';
import { ListarOrdemServicoComponent } from './ordem-servico/listar-ordem-servico/listar-ordem-servico.component';
import { ConcluirOrdemServicoComponent } from './ordem-servico/concluir-ordem-servico/concluir-ordem-servico.component';
import { ContasPagarReceberComponent } from './contas-pagar-receber/contas-pagar-receber.component';
import { ListarContaPagarReceberComponent } from './contas-pagar-receber/listar-conta-pagar-receber/listar-conta-pagar-receber.component';
import { CadastrarEEditarContaPagarReceberComponent } from './contas-pagar-receber/cadastrar-e-editar-conta-pagar-receber/cadastrar-e-editar-conta-pagar-receber.component';
import { EntradaProdutoComponent } from './entrada-produto/entrada-produto.component';
import { ListEntradaProdutoComponent } from './entrada-produto/list-entrada-produto/list-entrada-produto.component';
import { CadastrarEditarEntradaProdutoComponent } from './entrada-produto/cadastrar-editar-entrada-produto/cadastrar-editar-entrada-produto.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { CadastrarEEditarFornecedorComponent } from './fornecedor/cadastrar-e-editar-fornecedor/cadastrar-e-editar-fornecedor.component';
import { ListFornecedorComponent } from './fornecedor/list-fornecedor/list-fornecedor.component';
import { CentroCustoComponent } from './centro-custo/centro-custo.component';
import { CadastrarEEditarCentroCustoComponent } from './centro-custo/cadastrar-e-editar-centro-custo/cadastrar-e-editar-centro-custo.component';
import { ListCentroCustoComponent } from './centro-custo/list-centro-custo/list-centro-custo.component';
import { CompraComponent } from './compra/compra.component';
import { CadastrarEEditarCompraComponent } from './compra/cadastrar-e-editar-compra/cadastrar-e-editar-compra.component';
import { ListCompraComponent } from './compra/list-compra/list-compra.component';
import { CaixaComponent } from './caixa/caixa.component';
import { ListCaixaComponent } from './caixa/list-caixa/list-caixa.component';

@NgModule({
  declarations: [ClientesComponent, CadastrarEditarClienteComponent, ListarClienteComponent, ServicoComponent, ProdutosComponent, ListarServicoComponent, CadastrarEEditarServicoComponent, ListarProdutoComponent, CadastrarEEditarProdutoComponent, OrcamentoComponent, CadastrarEEditarOrcamentoComponent, ListarOrcamentoComponent, OrdemServicoComponent, ListarOrdemServicoComponent, ConcluirOrdemServicoComponent, ContasPagarReceberComponent, ListarContaPagarReceberComponent, CadastrarEEditarContaPagarReceberComponent, EntradaProdutoComponent, ListEntradaProdutoComponent, CadastrarEditarEntradaProdutoComponent, FornecedorComponent, CadastrarEEditarFornecedorComponent, ListFornecedorComponent, CentroCustoComponent, CadastrarEEditarCentroCustoComponent, ListCentroCustoComponent, CompraComponent, CadastrarEEditarCompraComponent, ListCompraComponent, CaixaComponent, ListCaixaComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    NbCardModule,
    NgSelectModule,
    NbRadioModule,
    NbButtonModule,
    NbSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule,
    PipeModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbListModule,
  ],
  exports: [
    ClientesComponent
  ]
})
export class OperadorModule { }
