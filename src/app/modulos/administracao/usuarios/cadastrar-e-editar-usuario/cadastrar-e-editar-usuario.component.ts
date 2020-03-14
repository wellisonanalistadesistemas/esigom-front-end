import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, OnInit, Component } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';
import { Perfil } from 'src/app/model/perfil';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-cadastrar-e-editar-usuario',
  templateUrl: './cadastrar-e-editar-usuario.component.html',
  styleUrls: ['./cadastrar-e-editar-usuario.component.scss']
})
export class CadastrarEditarUsuarioComponent implements OnInit {
  public objeto = new Usuario;
  public perfis: any;
  public perfil = new Perfil();
  public visualizar: boolean;
  rotaVisualizar: boolean;
  public b64Blob: Blob;
  constructor(public _usuarioService: UsuarioService, public _perfilService: PerfilService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._perfilService.getAll().subscribe(data => this.perfis = data);
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this.visualizar = true;
        this._usuarioService.buscarPeloId(params.id).subscribe(data => this.objeto = data);
      }
    });
    this.route.url.subscribe(url => {
      if (url[0].path == "visualizar") {
        this.rotaVisualizar = true;
      }
    })
  }



  changeFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  enviarImg(event) {
    if (event.target.value) {
      const file = event.target.files[0];
      const type = file.type;
      this.changeFile(file).then((base64: string): any => {
        this.objeto.img = base64.split(',')[1];
      });
    }
  }




  selecionarPerfil(perfilId: number, isAdicionar) {
    this.perfil = new Perfil();
    this.perfil.id = perfilId;
    if (isAdicionar) {
      this.objeto.perfis.push(this.perfil);
    } else {
      this.objeto.perfis.splice(this.objeto.perfis.findIndex(f => f.id === perfilId), 1);
    }
  }

  public verificarCheck(perfilId) {
    if (this.objeto.id) {
      return this.objeto.perfis.find(perfil => perfil.id === perfilId);
    }
  }

  salvarOuAlterar() {
    this.objeto.dthInclusao = new Date();
    if (this.objeto.id) {
      this._usuarioService.alterar(this.objeto.id, this.objeto)
        .subscribe(retorno => {
          if (!retorno) {
            this.router.navigate(['/administracao/usuarios']);
            this.toastr.success('Usuário editado com sucesso.');
          } else {
            this.toastr.error('Erro ao cadastrar.');
          }
        });
    } else {
      this._usuarioService.salvar(this.objeto).subscribe(retorno => {
        if (!retorno) {
          this.router.navigate(['/administracao/usuarios']);
          this.toastr.success('Usuário cadastrado com sucesso.');
        } else {
          this.toastr.error('Erro ao cadastrar.');
        }
      });
    }
  }
}
