import { registerLocaleData, CommonModule } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbListModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { MyHttpInterceptor } from './http.interceptor';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpInterceptorModule } from './services/header-interceptor.service';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    CommonModule,
    ComponentsModule,
    RouterModule,
    NbCardModule,
    NbInputModule,
    NgSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbThemeModule.forRoot(),
    AccordionModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    RouterModule,
    HttpInterceptorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    },

    { provide: LOCALE_ID, useValue: 'pt-BR' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
