
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

const routes: Routes = [
  { path: '', redirectTo: 'administracao/usuarios', pathMatch: 'full' },
  // { path: 'home', component: UsuariosComponent },
  // { path: 'auth', component: AuthComponent },



  /* Operações */
  {
    path: 'operador/orcamentos',
    data: {
      breadcrumbs: 'Orçamentos'
    },
    children: [
      {
        path: '', component: CadastrarEEditarOrcamentoComponent
      },
      // {
      //   path: 'cadastrar',
      //   data: {
      //     breadcrumbs: 'Novo Orçamento'
      //   },
      //   component: CadastrarEEditarOrcamentoComponent
      // },
      // {
      //   path: 'editar/:id',
      //   data: {
      //     breadcrumbs: 'Editar Orçamento'
      //   },
      //   component: CadastrarEEditarOrcamentoComponent
      // },

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
