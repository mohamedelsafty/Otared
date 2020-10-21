import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "inputCurrency"
})
export class InputCurrencyPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if(value)
    return (value.replace(/\D/g, "")).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    else
    return '';

  }
}
