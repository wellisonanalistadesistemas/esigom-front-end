import { NbCardModule, NbTreeGridModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdministracaoModule } from '../modulos/administracao/administracao.module';
import { OperadorModule } from '../modulos/operador/operador.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AccordionModule,
    FormsModule,
    NbTreeGridModule,
    AdministracaoModule,
    OperadorModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    BrowserAnimationsModule,
    NbCardModule,
  ]
})
export class HomeModule { }
