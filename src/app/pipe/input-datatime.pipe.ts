import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputDatatime'
})
export class InputDatatimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value;
      const tzoffset = ((new Date()).getTimezoneOffset()) * 60000;
      const localISOTime = (new Date(value - tzoffset)).toISOString().slice(0, -1);
      return localISOTime.substring(0, 16);
    }
  }

}
