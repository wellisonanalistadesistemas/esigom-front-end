
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './modulos/administracao/usuarios/usuarios.component';
import { CadastrarEditarUsuarioComponent } from './modulos/administracao/usuarios/cadastrar-e-editar-usuario/cadastrar-e-editar-usuario.component';
import { ClientesComponent } from './modulos/operador/clientes/clientes.component';
import { CadastrarEditarClienteComponent } from './modulos/operador/clientes/cadastrar-e-editar-cliente/cadastrar-e-editar-cliente.component';
import { PerfilComponent } from './modulos/administracao/perfil/perfil.component';
import { CadastrarEEditarPerfilComponent } from './modulos/administracao/perfil/cadastrar-e-editar-perfil/cadastrar-e-editar-perfil.component';
import { ProdutosComponent } from './modulos/operador/produtos/produtos.component';
import { CadastrarEEditarProdutoComponent } from './modulos/operador/produtos/cadastrar-e-editar-produto/cadastrar-e-editar-produto.component';
import { ServicoComponent } from './modulos/operador/servicos/servicos.component';
import { CadastrarEEditarServicoComponent } from './modulos/operador/servicos/cadastrar-e-editar-servico/cadastrar-e-editar-servico.component';
import { OrcamentoComponent } from './modulos/operador/orcamento/orcamento.component';
import { CadastrarEEditarOrcamentoComponent } from './modulos/operador/orcamento/cadastrar-e-editar-orcamento/cadastrar-e-editar-orcamento.component';
import { OrdemServicoComponent } from './modulos/operador/ordem-servico/ordem-servico.component';
import { ConcluirOrdemServicoComponent } from './modulos/operador/ordem-servico/concluir-ordem-servico/concluir-ordem-servico.component';
import { ContasPagarReceberComponent } from './modulos/operador/contas-pagar-receber/contas-pagar-receber.component';
import { CadastrarEEditarContaPagarReceberComponent } from './modulos/operador/contas-pagar-receber/cadastrar-e-editar-conta-pagar-receber/cadastrar-e-editar-conta-pagar-receber.component';
import { EntradaProdutoComponent } from './modulos/operador/entrada-produto/entrada-produto.component';
import { CadastrarEditarEntradaProdutoComponent } from './modulos/operador/entrada-produto/cadastrar-editar-entrada-produto/cadastrar-editar-entrada-produto.component';
import { CentroCustoComponent } from './modulos/operador/centro-custo/centro-custo.component';
import { CadastrarEEditarCentroCustoComponent } from './modulos/operador/centro-custo/cadastrar-e-editar-centro-custo/cadastrar-e-editar-centro-custo.component';
import { FornecedorComponent } from './modulos/operador/fornecedor/fornecedor.component';
import { CadastrarEEditarFornecedorComponent } from './modulos/operador/fornecedor/cadastrar-e-editar-fornecedor/cadastrar-e-editar-fornecedor.component';
import { CaixaComponent } from './modulos/operador/caixa/caixa.component';
import { CadastrarEEditarCompraComponent } from './modulos/operador/compra/cadastrar-e-editar-compra/cadastrar-e-editar-compra.component';
import { CompraComponent } from './modulos/operador/compra/compra.component';

const routes: Routes = [

  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  // { path: 'home', component: UsuariosComponent },
  // { path: 'auth', component: AuthComponent },

  // Operações
  {
    path: 'operador/orcamentos',
    data: {
      breadcrumbs: 'Orçamentos'
    },
    children: [
      {
        path: '', component: OrcamentoComponent
      },
      {
        path: 'cadastrar',
        data: {
          breadcrumbs: 'Novo Orçamento'
        },
        component: CadastrarEEditarOrcamentoComponent
      },
      {
        path: 'editar/:id',
        data: {
          breadcrumbs: 'Editar Orçamento'
        },
        component: CadastrarEEditarOrcamentoComponent
      },
      {
        path: 'visualizar/:id',
        data: {
          breadcrumbs: 'Visualizar Orçamento'
        },
        component: CadastrarEEditarOrcamentoComponent
      },
    ]
  },

  {
    path: 'operador/ordens-servicos',
    data: {
      breadcrumbs: 'Ordem de Serviços'
    },
    children: [
      {
        path: '', component: OrdemServicoComponent
      },
      {
        path: 'concluir/:id',
        data: {
          breadcrumbs: 'Novo Orçamento'
        },
        component: ConcluirOrdemServicoComponent
      },
      {
        path: 'visualizar/:id',
        data: {
          breadcrumbs: 'Visualizar Ordem de Serviço'
        },
        component: ConcluirOrdemServicoComponent
      }
    ]
  },

  {
    path: 'operador/compras',
    data: {
      breadcrumbs: 'Compras'
    },
    children: [
      {
        path: '', component: CompraComponent
      },
      {
        path: 'cadastrar',
        data: {
          breadcrumbs: 'Nova Compra'
        },
        component: CadastrarEEditarCompraComponent
      },
      {
        path: 'editar/:id',
        data: {
          breadcrumbs: 'Editar Compra'
        },
        component: CadastrarEEditarCompraComponent
      },
      {
        path: 'visualizar/:id',
        data: {
          breadcrumbs: 'Visualizar Compra'
        },
        component: CadastrarEEditarCompraComponent
      }
    ]
  },




  // Financeiro
  {
    path: 'operador/contas-a-pagar-receber',
    data: {
      breadcrumbs: 'Contas à Pagar ou Receber'
    },
    children: [
      {
        path: '', component: ContasPagarReceberComponent
      },
      {
        path: 'cadastrar',
        data: {
          breadcrumbs: 'Nova Conta'
        },
        component: CadastrarEEditarContaPagarReceberComponent
      },
      {
        path: 'editar/:id',
        data: {
          breadcrumbs: 'Editar Conta'
        },
        component: CadastrarEEditarContaPagarReceberComponent
      },
      {
        path: 'visualizar/:id',
        data: {
          breadcrumbs: 'Visualizar Conta'
        },
        component: CadastrarEEditarContaPagarReceberComponent
      },
    ]
  },


  {
    path: 'operador/acompanhar-caixa',
    data: {
      breadcrumbs: 'Acompanhar Caixa'
    },
    children: [
      {
        path: '', component: CaixaComponent
      },
    ]
  },


  /* Cadastros */
  {
    path: 'operador/clientes',
    data: {
      breadcrumbs: 'Clientes'
    },
    children: [
      {
        path: '', component: ClientesComponent
      },
      {
        path: 'cadastrar',
        data: {
          breadcrumbs: 'Novo Usuario'
        },
        component: CadastrarEditarClienteComponent
      },
      {
        path: 'editar/:id',
        component: CadastrarEditarClienteComponent
      },
      {
        path: 'visualizar/:id',
        component: CadastrarEditarClienteComponent
      },
    ]
  },

  {
    path: 'operador/produtos',
    data: {
      breadcrumbs: 'Produtos'
    },
    children: [
      {
        path: '', component: ProdutosComponent
      },
      {
        path: 'cadastrar',
        data: {
          breadcrumbs: 'Novo Produto'
        },
        component: CadastrarEEditarProdutoComponent
      },
      {
        path: 'editar/:id',
        component: CadastrarEEditarProdutoComponent
      },

    ]
  },

  {
    path: 'operador/servicos',
    data: {
      breadcrumbs: 'Serviços'
    },
    children: [
      {
        path: '', component: ServicoComponent
      },
      {
        path: 'cadastrar',
        data: {
          breadcrumbs: 'Novo Serviço'
        },
        component: CadastrarEEditarServicoComponent
      },
      {
        path: 'editar/:id',
        component: CadastrarEEditarServicoComponent
      },

    ]
  },


  /* Cadastros */
  {
    path: 'operador/entrada-produtos',
    data: {
      breadcrumbs: 'Entrada de Produtos'
    },
    children: [
      {
        path: '', component: EntradaProdutoComponent
      },
      {
        path: 'cadastrar',
        data: {
          breadcrumbs: 'Novo Usuario'
        },
        component: CadastrarEditarEntradaProdutoComponent
      },
      {
        path: 'editar/:id',
        component: CadastrarEditarEntradaProdutoComponent
      },
      {
        path: 'visualizar/:id',
        component: CadastrarEditarEntradaProdutoComponent
      },

    ]
  },

  {
    path: 'operador/centro-custo',
    data: {
      breadcrumbs: 'Centro de Custos'
    },
    children: [
      {
        path: '', component: CentroCustoComponent
      },
      {
        path: 'cadastrar',
        data: {
          breadcrumbs: 'Novo Centro Custo'
        },
        component: CadastrarEEditarCentroCustoComponent
      },
      {
        path: 'editar/:id',
        data: {
          breadcrumbs: 'Editar Centro Custo'
        },
        component: CadastrarEEditarCentroCustoComponent
      },

    ]
  },

  {
    path: 'operador/fornecedores',
    data: {
      breadcrumbs: 'Fornecedores'
    },
    children: [
      {
        path: '', component: FornecedorComponent
      },
      {
        path: 'cadastrar',
        data: {
          breadcrumbs: 'Novo Fornecedor'
        },
        component: CadastrarEEditarFornecedorComponent
      },
      {
        path: 'editar/:id',
        data: {
          breadcrumbs: 'Editar Fornecedor'
        },
        component: CadastrarEEditarFornecedorComponent
      },

    ]
  },




  /* Controle de Acesso */
  {
    path: 'administracao/usuarios',
    data: {
      breadcrumbs: 'Usuários'
    },
    children: [
      {
        path: '', component: UsuariosComponent
      },
      {
        path: 'cadastrar',
        data: {
          breadcrumbs: 'Novo Usuario'
        },
        component: CadastrarEditarUsuarioComponent
      },
      {
        path: 'editar/:id',
        component: CadastrarEditarUsuarioComponent
      },
      {
        path: 'visualizar/:id',
        component: CadastrarEditarUsuarioComponent
      },

    ]
  },

  {
    path: 'administracao/perfis',
    data: {
      breadcrumbs: 'Perfis'
    },
    children: [
      {
        path: '', component: PerfilComponent
      },
      {
        path: 'cadastrar',
        data: {
          breadcrumbs: 'Novo Perfil'
        },
        component: CadastrarEEditarPerfilComponent
      },
      {
        path: 'editar/:id',
        component: CadastrarEEditarPerfilComponent
      },

    ]
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
