import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { Telefone } from 'src/app/model/telefone';
import { Cliente } from 'src/app/model/cliente';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastrar-e-editar-cliente',
  templateUrl: './cadastrar-e-editar-cliente.component.html',
  styleUrls: ['./cadastrar-e-editar-cliente.component.scss']
})
export class CadastrarEditarClienteComponent {

  public objeto = new Cliente;
  public endereco = new Endereco();
  public telefone = new Telefone();
  closeResult: string;

  constructor(private animateScrollService: NgAnimateScrollService,
    private cd: ChangeDetectorRef, private toastr: ToastrService, private modalService: NgbModal) { }


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

  // TODO
  buscarCep(){
    console.log("Entrou aqui no busca cep");
  }

}
