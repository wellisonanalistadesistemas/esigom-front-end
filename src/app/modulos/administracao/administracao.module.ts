import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbMenuModule, NbListModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDropdownModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ToastrModule } from 'ngx-toastr';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CadastrarEditarUsuarioComponent } from './usuarios/cadastrar-e-editar-usuario/cadastrar-e-editar-usuario.component';
import { ListarUsuarioComponent } from './usuarios/listar-usuario/listar-usuario.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PerfilComponent } from './perfil/perfil.component';
import { ListarPerfilComponent } from './perfil/listar-perfil/listar-perfil.component';
import { CadastrarEEditarPerfilComponent } from './perfil/cadastrar-e-editar-perfil/cadastrar-e-editar-perfil.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    CadastrarEditarUsuarioComponent, ListarUsuarioComponent, PerfilComponent, ListarPerfilComponent, CadastrarEEditarPerfilComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    NbCardModule,
    NgSelectModule,
    FormsModule,
    NbInputModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule,
    PipeModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbListModule,
    NbButtonModule
  ],
  exports: [
    UsuariosComponent,
    PerfilComponent
  ]
})
export class AdministracaoModule { }
