import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titre'
})
export class TitrePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    let titre = "<FONT face='Curlz MT'  size='7'>"+value+"</FONT>";
    titre = "<center>"+titre+"</center>";
    return "<i>"+titre+"</i>";
  }

}
