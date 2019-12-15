
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './modulos/administracao/usuarios/usuarios.component';
import { CadastrarEditarUsuarioComponent } from './modulos/administracao/usuarios/cadastrar-e-editar-usuario/cadastrar-e-editar-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },

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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
