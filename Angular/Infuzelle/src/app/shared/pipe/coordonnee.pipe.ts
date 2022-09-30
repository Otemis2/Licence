import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coordonnee'
})
export class CoordonneePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let txt = "<FONT face='Constantia'  size='4'>"+value+"</FONT>";
    txt = "<center>"+txt+"</center>";
    return txt;
  }

}
