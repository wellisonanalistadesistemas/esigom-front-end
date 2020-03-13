import { ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { defineLocale, ptBrLocale, BsLocaleService } from 'ngx-bootstrap';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit {
  constructor(
    private _usuarioService: UsuarioService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private localeService: BsLocaleService
  ) {
    defineLocale('ptbr', ptBrLocale);
    this.localeService.use('ptbr');
  }

  buscaForm = ({}) as UsuarioBuscaEntity;
  listaUsuarios: any;
  paginaAtual: any;
  modalConfirmacao: any;
  idExcluir: any;
  closeResult: string;
  usuario: string;
  novaSenha: string;

  ngOnInit() {
    this.novoForm();
    this.buscarUsuarios();
  }

  novoForm() {
    this.buscaForm = new UsuarioBuscaEntity();
    this.buscaForm.offset = 0;
    this.buscaForm.limit = 10;
    this.buscaForm.coluna = "id";
    this.buscaForm.tipoOrdenacao = "desc";
  }

  iniciarForm() {
    this.novoForm;
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    console.log(this.buscaForm);

    this._usuarioService.pesquisar(this.buscaForm).subscribe(data => {
      this.listaUsuarios = data;
    });
  }

  public ordenar(params) {
    this.buscaForm.coluna = params;
    if (this.buscaForm.tipoOrdenacao === 'desc') {
      this.buscaForm.tipoOrdenacao = "asc"
    } else {
      this.buscaForm.tipoOrdenacao = "desc"
    }
    this.buscarUsuarios();
  }

  public paginar(params) {
    // this.buscaForm.offset = 10 * (params.page - 1);
    this.buscaForm.offset = (params.page - 1);
    this.paginaAtual = params.page;
    this.buscarUsuarios();
  }

  public abrirModalAlterarSenha(dados, template) {
    this.usuario = dados.nome;
    this.modalService.open(template, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.alterarSenha(dados.id)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  public abrirModalExclusao(Id, template) {
    this.modalService.open(template, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.excluir(Id)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  public excluir(id) {
    this._usuarioService.excluir(id).subscribe(data => {
      this.buscarUsuarios();
      this.toastr.success('Usuário excluído com sucesso.');
    });
  }

  public alterarSenha(Id) {
    if (this._usuarioService.alterarSenha(Id, this.novaSenha).subscribe()) {
      this.toastr.success('Senha alterada com sucesso.');
      this.novaSenha = "";
    };
  }
}

export class UsuarioBuscaEntity {
  offset: number;
  limit: number;
  coluna?: string;
  tipoOrdenacao?: string;
  descricao?: string;
  nome?: string;
  login?: string;
  dthInclusao?: Date;
  email?: string;
}
