import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-compra',
  templateUrl: './list-compra.component.html',
  styleUrls: ['./list-compra.component.scss']
})
export class ListCompraComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  @Input() lista;
  @Output() eventoPaginar = new EventEmitter();
  @Output() eventoOrdenar = new EventEmitter();
  @Output() eventoExcluir = new EventEmitter();
  @Output() eventoAlterarSenha = new EventEmitter();
  @Output() eventoObterParcela = new EventEmitter();
  @Output() eventoContabilizarEmEstoque = new EventEmitter();

  parametrosPaginacao = ({}) as BuscaEntity;
  paginaAtual: any;
  excluirId: any;

  ngOnInit(): void {
    this.parametrosPaginacao = new BuscaEntity();
    this.parametrosPaginacao.offset = 0;
    this.parametrosPaginacao.limit = 10;
  }

  public search(params) {
    this.parametrosPaginacao.offset = 10 * (params.page - 1);
    this.paginaAtual = params.page;
    this.eventoPaginar.emit(params);
  }

  public ordenar(params) {
    this.eventoOrdenar.emit(params);
  }

  public excluir(Id) {
    this.eventoExcluir.emit(Id);
  }

  public contabilizarEmEstoque(Id) {
    this.eventoContabilizarEmEstoque.emit(Id);
  }

  public obterParcelas(Id) {
    this.eventoObterParcela.emit(Id);
  }

  public alterarSenha(id, nome) {
    this.eventoAlterarSenha.emit({ id, nome });
  }

}

export class BuscaEntity {
  limit: number;
  descricao?: string;
  offset: number;

}