import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';
import { Perfil } from 'src/app/model/perfil';
import { ServicoService } from 'src/app/services/servico';
import { Servico } from 'src/app/model/servico';


@Component({
  selector: 'app-cadastrar-e-editar-servico',
  templateUrl: './cadastrar-e-editar-servico.component.html',
  styleUrls: ['./cadastrar-e-editar-servico.component.scss']
})
export class CadastrarEEditarServicoComponent implements OnInit {
  public objeto = new Servico;
  public visualizar: boolean;

  constructor(public _servicoService: ServicoService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this.visualizar = true;
        this._servicoService.buscarPeloId(params.id).subscribe(data => this.objeto = data);
      }
    })
  }

  salvarOuAlterar() {
    if (this.objeto.id) {
      this._servicoService.alterar(this.objeto.id, this.objeto)
        .subscribe(retorno => {
          if (!retorno) {
            this.router.navigate(['/operador/servicos']);
            this.toastr.success('Serviço editado com sucesso.');
          } else {
            this.toastr.error('Erro ao cadastrar.');
          }
        });
    } else {
      this._servicoService.salvar(this.objeto).subscribe(retorno => {
        if (!retorno) {
          this.router.navigate(['/operador/servicos']);
          this.toastr.success('Serviço cadastrado com sucesso.');
        } else {
          this.toastr.error('Erro ao cadastrar.');
        }
      });
    }
  }
}
