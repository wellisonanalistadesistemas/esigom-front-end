import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse,
    HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse, HttpEvent, HttpHeaders, HttpClient
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

    token: any;
    constructor(
        private _toastr: ToastrService,
        private _router: Router
    ) { }

    addToken(req: HttpRequest<any>, token): HttpRequest<any> {
        let header;
        if (token) {
            header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
        } else {
            header = req.headers;
        }
        return req.clone({ headers: header });
    }
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | HttpEvent<any>> {
        let url = environment.apiUrlService + req.url;
        const cloneReq = req.clone({ url });

        this.token = null;
        if (localStorage.getItem('sigom_auth') != null && req.url != "login") {
            this.token = JSON.parse(localStorage.getItem('sigom_auth')).access_token;
            return next.handle(this.addToken(cloneReq, this.token)).pipe(
                catchError((error: any) => {
                    if (error.status == 403) {
                        this._toastr.error('Usuário não autorizado.');
                        localStorage.clear();
                        this._router.navigate(['auth']);
                    }
                    return Observable.throw(error);
                })
            );
        } else {
            return next.handle(cloneReq);
        }
    }
}