import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let txt = "<FONT face='Blackadder ITC'  size='5'>"+value+"</FONT>";
    txt = "<center>"+txt+"</center>";
    return txt;
  }

}
