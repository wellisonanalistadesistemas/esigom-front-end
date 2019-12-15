import { Injectable } from '@angular/core';

@Injectable()
export class CustomValidateService {

    static customMensageService(errors, formControl) {
        let objeto = errors;
        let campos = Object.keys(errors);
        campos.forEach(campo => {
            let erros = objeto[campo];
            let erro = Object.keys(errors[campo]);
            formControl.controls[campo.replace(/\w\S*/g, (txt => txt[0].toLowerCase() + txt.slice(1)))].setErrors({ customService: erros[erro[0]] });
        });
    }


}
