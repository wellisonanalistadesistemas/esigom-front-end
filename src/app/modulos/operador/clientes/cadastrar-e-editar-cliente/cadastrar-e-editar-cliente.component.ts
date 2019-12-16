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
  public enderecos: any;
  public endereco = new Endereco();
  public telefone = new Telefone();
  public telefones: any;
  closeResult: string;

  constructor(private animateScrollService: NgAnimateScrollService,
    private cd: ChangeDetectorRef, private toastr: ToastrService, private modalService: NgbModal) { }


  /* ! Adicionar Telefone */
  abrirModalAdicionarTelefone(template) {
    this.modalService.open(template, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.adicionarTelefone()}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }
  adicionarTelefone() {
    console.log("Entrou no Adicionar.");
  }

  /* ! Adicionar Endereço */

}
