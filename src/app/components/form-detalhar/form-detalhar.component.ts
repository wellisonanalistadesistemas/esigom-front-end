import { Component, Input, OnInit } from '@angular/core';
import { TipoDetalhes } from './../../enum/tipo-detalhes.enum';

@Component({
  selector: 'app-form-detalhar',
  templateUrl: './form-detalhar.component.html',
  styleUrls: ['./form-detalhar.component.css']
})
export class FormDetalharComponent implements OnInit {
  @Input() dado;
  @Input() label;
  @Input() tipo;
  @Input() id;
  @Input() erro;

  public tipoDetalhes = TipoDetalhes;

  constructor() { }

  ngOnInit() { }

}
