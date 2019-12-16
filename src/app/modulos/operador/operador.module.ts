import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbMenuModule, NbListModule } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDropdownModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ToastrModule } from 'ngx-toastr';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { CadastrarEditarClienteComponent } from './clientes/cadastrar-e-editar-cliente/cadastrar-e-editar-cliente.component';

@NgModule({
  declarations: [ClientesComponent, CadastrarEditarClienteComponent],
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
    ClientesComponent
  ]
})
export class OperadorModule { }
