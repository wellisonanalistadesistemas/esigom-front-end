import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbMenuModule, NbListModule } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDropdownModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ToastrModule } from 'ngx-toastr';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { UsuariosComponent } from './administracao/usuarios/usuarios.component';
import { ComponentsModule } from '../components/components.module';
import { ListarUsuarioComponent } from './administracao/usuarios/listar-usuario/listar-usuario.component';
import { CadastrarEditarUsuarioComponent } from './administracao/usuarios/cadastrar-e-editar-usuario/cadastrar-e-editar-usuario.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    CadastrarEditarUsuarioComponent, ListarUsuarioComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    NbCardModule,
    NgSelectModule,
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
    UsuariosComponent
  ]
})
export class AdministracaoModule { }
