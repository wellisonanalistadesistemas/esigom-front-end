import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siglaUnidadeGestora'
})
export class SiglaUnidadeGestoraPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value.length > 0) {
      return value.find(unidadeGestora => unidadeGestora.id === args).sigla;
    } else {
      return '-';
    }
  }

}
