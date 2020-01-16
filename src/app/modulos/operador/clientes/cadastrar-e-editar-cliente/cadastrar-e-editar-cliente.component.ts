import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { Telefone } from 'src/app/model/telefone';
import { Cliente } from 'src/app/model/cliente';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Cep } from 'src/app/model/cep';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-e-editar-cliente',
  templateUrl: './cadastrar-e-editar-cliente.component.html',
  styleUrls: ['./cadastrar-e-editar-cliente.component.scss']
})
export class CadastrarEditarClienteComponent {
  public msgAction: string;
  public objeto = new Cliente;
  public endereco = new Endereco();
  public telefone = new Telefone();
  closeResult: string;


  constructor(private http: HttpClient, private animateScrollService: NgAnimateScrollService,
    private cd: ChangeDetectorRef, private modalService: NgbModal, private _clienteService: ClienteService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }



  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this._clienteService.buscarPeloId(params.id).subscribe(data => this.objeto = data);
      }
    })
  }

  /* ! Adicionar/Excluir Telefone e/ou Endereço !  */
  abrirModal(template, size, param) {
    if (param) {
      this.telefone = new Telefone();
    } else {
      this.endereco = new Endereco();
    }
    this.modalService.open(template, { size: size, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.adicionar(param)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }
  adicionar(param) {
    if (param) {
      this.objeto.telefones.push(this.telefone);
    } else {
      this.objeto.enderecos.push(this.endereco);
    }
  }
  excluir(it, param) {
    if (param) {
      const index = this.objeto.telefones.indexOf(it);
      this.objeto.telefones.splice(index, 1)
    } else {
      const index = this.objeto.enderecos.indexOf(it);
      this.objeto.enderecos.splice(index, 1)
    };
  }

  /* Buscar CEP */
  buscarCep() {
    this.http.get(`https://viacep.com.br/ws/${this.endereco.cep}/json/`).subscribe((data: Cep) => {
      // aplicar retorno aos inputs  
      this.endereco.descricao = data.logradouro;
      this.endereco.bairro = data.bairro;
      this.endereco.cidade = data.localidade;
      this.endereco.uf = data.uf;
    });
  }

  public salvarOuAlterar() {
    if (this.objeto.id) {
      this._clienteService.alterar(this.objeto.id, this.objeto)
        .subscribe(retorno => {
          if (!retorno) {
            this.redirencionar('Cliente editado com sucesso.');
          } else {
            this.toastr.error('Erro ao cadastrar.');
          }
        });
    } else {
      this._clienteService.salvar(this.objeto).subscribe(retorno => {
        if (!retorno) {
          this.redirencionar('Cliente cadastrado com sucesso.');
        } else {
          this.toastr.error('Erro ao cadastrar.');
        }
      });
    }
  }

  redirencionar(string) {
    this.toastr.success(string);
    this.router.navigate(['/operador/clientes']);
  }


}
