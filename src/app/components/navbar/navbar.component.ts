import { Component, OnInit, Inject } from '@angular/core';
import { NbMenuService, NB_WINDOW } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/app/model/role';
import { RetornoAuth } from 'src/app/model/retornoAuth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public perfilAdministrador = false;
  roles = new Array<Role>();
  public title = 'remessas';
  public user: {};
  //  public roles = [localStorage.getItem('roles')[0];
  public base64image = 'data:image/jpeg;base64,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';
  public items = [
    { title: 'PERFIL' },
    { title: 'SAIR' },
  ];


  constructor(private nbMenuService: NbMenuService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.roles = JSON.parse(localStorage.getItem('sigom_auth')).roles;
    this.roles.forEach(element => {
      if (element.authority == 'PERF_ADMINISTRADOR') {
        this.perfilAdministrador = true;
        stop;
      }
    });

    this.user = { nome: JSON.parse(localStorage.getItem('sigom_auth')).nome, funcao: JSON.parse(localStorage.getItem('sigom_auth')).funcao };
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if (title == 'SAIR') {
          localStorage.clear();
          this.router.navigate(['auth']);
          this.toastr.success('LogOut realizado com sucesso.');
        }
      });

    // console.log(this.roles[0]);

  }
}