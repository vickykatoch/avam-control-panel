import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value) {
      return moment(value).format('MM-DD-YYYY HH:mm:ss');
    }
    return value;
  }

}
