
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(created) {
    let dateAccountCreated = new Date(created);
    let secondsPastSinceCreation = dateAccountCreated.getTime() / 1000;
    let daysPast = secondsPastSinceCreation / 86400;
    let currentDate = new Date();
    let secondsPastCD = currentDate.getTime() / 1000;
    let daysPastCD = secondsPastCD / 86400
    let daysPastSince: any = daysPastCD - daysPast
    return parseInt(daysPastSince)
  }
}