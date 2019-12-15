import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuTemas = {
    pessoal:[
      {url: '#', legenda: 'Dashboard'},
      {url: '#', legenda: 'Plano de Cargo'},
      {url: '#', legenda: 'Concurso Público'},
      {url: '#', legenda: 'Admissão de Pessoal'},
      {url: '#', legenda: 'Movimentação'},
      {url: '#', legenda: 'Vacância'},
      {url: '#', legenda: 'Folha Pagamento'}
    ],
    engenharia:[
        {url: '#', legenda: 'Dashboard'},
        {url: '#', legenda: 'Edital'},
        {url: '#', legenda: 'Edital'},
        {url: '#', legenda: 'Edital'},
        {url: '#', legenda: 'Edital'},
        {url: '#', legenda: 'Edital'},
        {url: '#', legenda: 'Edital'},
        {url: '#', legenda: 'Edital'}
    ]
  }

  public menu: any;

  constructor() { 
    this.menu = this.menuTemas.engenharia;
  }

  ngOnInit() {
  }

}
