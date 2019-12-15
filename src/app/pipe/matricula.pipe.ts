import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matricula'
})
export class MatriculaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value !== 'number') {
      value = value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
      return value.substring(0, value.length - 1).concat('-').concat(value.substring(value.length - 1));
    } else {
      value = value.toString();
      return value.substring(0, value.length - 1).concat('-').concat(value.substring(value.length - 1));
    }
  }

}
