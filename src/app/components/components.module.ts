import { FormInputComponent } from './form-input/form-input.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormDetalharComponent } from './form-detalhar/form-detalhar.component';
import { PipeModule } from '../pipe/pipe.module';
import { ComposicaoVisualizarComponent } from './composicao-visualizar/composicao-visualizar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ControlMessagesModule } from './control-messages/control-messages.module';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { NbMenuModule } from './menu/menu.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    NgSelectModule,
    ControlMessagesModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbIconModule,
    RouterModule,
    PaginationModule,
    AngularFontAwesomeModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormDetalharComponent,
    ComposicaoVisualizarComponent,
    FormInputComponent
  ],
  exports: [
    FormDetalharComponent,
    ComposicaoVisualizarComponent,
    FormInputComponent
  ]
})
export class ComponentsModule { }
