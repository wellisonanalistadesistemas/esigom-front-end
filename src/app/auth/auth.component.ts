import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public authString = 'username=20566972115&password=1234567&grant_type=password&client_id=e-protocolo&client_secret=abc123def&scope=eprotocolo.acesso_total barramento.acesso_total offline_access';
  // public auth = {
  //   username: 28633938120,
  //   password: 1234567,
  //   grant_type: 'password',
  //   client_id: 'e-protocolo',
  //   client_secret: 'abc123def',
  //   scope: 'eprotocolo.acesso_total barramento.acesso_total offline_access',
  // };

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    if (!sessionStorage.getItem('eProtocolo-auth')) {
      this.login(this.authString).subscribe(data => {
        isPlatformBrowser(this.platformId) ? sessionStorage.setItem('eProtocolo-auth', JSON.stringify(data)) : null;
        this.router.navigate(['/home']);
      });
    } else {
      this.router.navigate(['/home']);
    }
  }

  login(params) {
    return this.http.post('connect/token', params, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Accept', 'application/json'),
    });
  }
}
