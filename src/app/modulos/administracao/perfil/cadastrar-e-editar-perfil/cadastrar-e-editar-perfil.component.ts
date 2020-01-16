import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';
import { Perfil } from 'src/app/model/perfil';


@Component({
  selector: 'app-cadastrar-e-editar-perfil',
  templateUrl: './cadastrar-e-editar-perfil.component.html',
  styleUrls: ['./cadastrar-e-editar-perfil.component.scss']
})
export class CadastrarEEditarPerfilComponent implements OnInit {
  public objeto = new Perfil;
  public visualizar: boolean;

  constructor(public _perfilService: PerfilService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this.visualizar = true;
        this._perfilService.buscarPeloId(params.id).subscribe(data => this.objeto = data);
      }
    })
  }

  salvarOuAlterar() {
    if (this.objeto.id) {
      this._perfilService.alterar(this.objeto.id, this.objeto)
        .subscribe(retorno => {
          if (!retorno) {
            this.router.navigate(['/administracao/perfis']);
            this.toastr.success('Perfil editado com sucesso.');
          } else {
            this.toastr.error('Erro ao cadastrar.');
          }
        });
    } else {
      this._perfilService.salvar(this.objeto).subscribe(retorno => {
        if (!retorno) {
          this.router.navigate(['/administracao/perfis']);
          this.toastr.success('Perfil cadastrado com sucesso.');
        } else {
          this.toastr.error('Erro ao cadastrar.');
        }
      });
    }
  }
}
