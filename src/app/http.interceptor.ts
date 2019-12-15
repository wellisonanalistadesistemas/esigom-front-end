
import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse,
    HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse, HttpEvent, HttpHeaders, HttpClient
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

    token: any;
    constructor() { }

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
        let url;
        if (req.url.indexOf('http') >= 0) {
            url = req.url;
        } else if (req.url.indexOf('connect') >= 0) {
            url = environment.apiUrlIdentity + req.url;
        } else {
            url = environment.apiUrlService + req.url;
        }
        const cloneReq = req.clone({ url });
        this.token = null;
        if (sessionStorage.getItem('eProtocolo-auth')) {
            this.token = JSON.parse(sessionStorage.getItem('eProtocolo-auth')).access_token;
        }
        return next.handle(this.addToken(cloneReq, this.token));
    }

}
