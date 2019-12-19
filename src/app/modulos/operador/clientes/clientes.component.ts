import { ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit {
  constructor(private _clienteService: ClienteService, private animateScrollService: NgAnimateScrollService,
    private cd: ChangeDetectorRef, private toastr: ToastrService, private modalService: NgbModal) { }

  buscaForm = ({}) as ClienteBuscaEntity;
  listaClientes: any;
  paginaAtual: any;
  modalConfirmacao: any;
  idExcluir: any;
  closeResult: string;

  /* Modal Alterar Senha*/
  usuario: string;
  novaSenha: string;

  ngOnInit() {
    this.novoForm();
    this.buscarClientes();
  }

  novoForm() {
    this.buscaForm = new ClienteBuscaEntity();
    this.buscaForm.offset = 0;
    this.buscaForm.limit = 10;
    this.buscaForm.coluna = "id";
    this.buscaForm.tipoOrdenacao = "desc";
  }

  iniciarForm() {
    this.novoForm;
    this.buscarClientes();
  }

  buscarClientes() {
    this._clienteService.pesquisar(this.buscaForm).subscribe(data => {
      this.listaClientes = data;
    });
  }

  public ordenar(params) {
    this.buscaForm.coluna = params;
    if (this.buscaForm.tipoOrdenacao === 'desc') {
      this.buscaForm.tipoOrdenacao = "asc"
    } else {
      this.buscaForm.tipoOrdenacao = "desc"
    }
    this.buscarClientes();
  }

  public paginar(params) {
    // this.buscaForm.offset = 10 * (params.page - 1);
    this.buscaForm.offset = (params.page - 1);
    this.paginaAtual = params.page;
    this.buscarClientes();
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
    this._clienteService.excluir(id).subscribe(data => {
      this.buscarClientes();
      this.toastr.success('Usuário excluído com sucesso.');
    });
  }

  public alterarSenha(Id) {
    if (this._clienteService.alterarSenha(Id, this.novaSenha).subscribe()) {
      this.toastr.success('Senha alterada com sucesso.');
      this.novaSenha = "";
    };
  }
}

export class ClienteBuscaEntity {
  offset: number;
  limit: number;
  coluna?: string;
  tipoOrdenacao?: string;
  descricao?: string;
  nome: number;
  login: string;
  dthInclusao: string;
  email: string;
}
