import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.menu = this.menuTemas.engenharia;
  }

  ngOnInit() {
  }

}
