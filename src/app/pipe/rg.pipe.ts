import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rg'
})
export class RgPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      value = value.toString();
      value = value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
      if (value.length === 9) {
        return value.substring(0, 2).concat('.')
          .concat(value.substring(2, 5))
          .concat('.')
          .concat(value.substring(5, 8))
          .concat('-')
          .concat(value.substring(8, 9));
      }
    } else {
      value = '-';
    }
    return value;
  }

}
