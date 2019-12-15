import { filter } from 'rxjs/operators';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-composicao-visualizar',
  templateUrl: './composicao-visualizar.component.html',
  styleUrls: ['./composicao-visualizar.component.css']
})
export class ComposicaoVisualizarComponent implements OnInit {
  @Input() composicoes;
  @Input() composicoesDocumentos;
  @Output() visualizar = new EventEmitter();
  public novoArrayComposicao = [];

  constructor() { }

  ngOnInit() {
    this.distinct();
    this.ordenar();
  }

  public ordenar() {
    this.composicoes = this.composicoes.sort((a, b) => {
      if (a.tipoDocumentoComposicao.ordemComposicao < b.tipoDocumentoComposicao.ordemComposicao) {
        return -1;
      }
      if (a.tipoDocumentoComposicao.ordemComposicao > b.tipoDocumentoComposicao.ordemComposicao) {
        return 1;
      }
      return 0;
    });
  }

  public tipoDocumento(params) {
    let comp = this.composicoesDocumentos.filter(filtro => filtro.codTipoDocumento === params.tipoDocumentoId);
    if (comp.length > 0) {
      return comp;
    } else {
      comp = [{ documento: 'erro', documentoObrigatorio: 'erro' }];
      return comp;
    }
  }

  public visualizarArquivo(params) {
    this.visualizar.emit(params);
  }

  public distinct() {
    const arr: Array<any> = Array.from(new Set(this.composicoes.map((item: any) => item.tipoDocumentoComposicaoId)));
    arr.forEach(item => {
      this.novoArrayComposicao.push(this.composicoes.find(composicao => composicao.tipoDocumentoComposicaoId === item));
    });
  }
}
