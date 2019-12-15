import { NbCardModule, NbTreeGridModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Component } from '@angular/core';
import { AdministracaoModule } from '../modulos/administracao.module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AccordionModule,
    FormsModule,
    NbTreeGridModule,
    AdministracaoModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    BrowserAnimationsModule,
    NbCardModule,
  ]
})
export class HomeModule { }
