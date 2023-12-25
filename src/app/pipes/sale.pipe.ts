import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sale',
  standalone: true,
  pure:false,
})
export class SalePipe implements PipeTransform {

  transform(value: number, ...args: number[]): any {
    let transaction=args[0];
    let copoun=args[1];
    if(transaction != undefined){
      let total= value + transaction;
      if(copoun != undefined) {
        return Number( total -(total /100 * copoun));
      }
      return value + transaction;
    }
    console.log(args)
    return value;

  }

}
