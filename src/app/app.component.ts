import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remessas';

  constructor(private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit() {
    // Em caso de Login Vazio
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['auth']);
    }
  }

  esconderBarra() {
    if (localStorage.getItem('token') !== null && localStorage.getItem('token').toString().trim() !== null) {
      return false;
    } else {
      //this.router.navigate(['auth']);
      return true;
    }
  }




}

