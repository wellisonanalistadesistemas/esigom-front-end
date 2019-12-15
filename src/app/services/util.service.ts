import { Injectable } from '@angular/core';
import { camelCase } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private toastService: ToastrService) { }

  camelcaseJson(json) {
    if (Array.isArray(json)) {
      return json.map(v => this.camelcaseJson(v));
    } else if (json !== null && json.constructor === Object) {
      return Object.keys(json).reduce(
        (result, key) => ({
          ...result,
          [camelCase(key)]: this.camelcaseJson(json[key]),
        }),
        {},
      );
    }
    return json;
  }

  toastErrorMessage(error) {
    let message = 'Não foi possível executar esta ação.';
    if (error.error) {
      if (error.error.errors) {
        if (error.error.errors.mensagem) {
          message = error.error.errors.mensagem;
        }
      }
    }
    if (error.status !== undefined && error.status === 400) {
      this.toastService.error(message);
    }
  }

  pdftoOpen(pdf, type = 'application/pdf') {
    return window.open(this.PdftoUrl(pdf, type));
  }

  PdftoUrl(pdf, type?) {
    const blob = new Blob([pdf], { type });
    return URL.createObjectURL(blob);
  }

  setErrorsForm(errors, form) {
    if (errors && form) {
      Object.keys(errors).forEach((item: any) => {
        if (form.controls[item] instanceof FormGroup) {
          this.setErrorsForm(errors[item], form.controls[item]);
        } else if (form.controls[item] instanceof FormArray) {
          this.setErrorsForm(errors[item], form.controls[item]);
        } else {
          if (errors[item][0] !== '') {
            form.controls[item].setErrors({ customService: errors[item] });
            form.controls[item].markAsTouched();
          } else {
            form.controls[item].setErrors({ required: true });
            form.controls[item].markAsTouched();
          }
        }
      });
    }
  }

  OrdenaRemessa(remessas) {
    return remessas.sort((a, b) => {
      if (a.remessaId > b.remessaId) {
        return -1;
      }
      if (a.remessaId < b.remessaId) {
        return 1;
      }
      return 0;
    });
  }
}
