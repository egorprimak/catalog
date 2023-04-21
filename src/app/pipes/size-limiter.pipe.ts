import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sizeLimiter',
  standalone: true
})
export class SizeLimiterPipe implements PipeTransform {

  transform(v: string, size = 50): string {
    if (!v || v.length <= size) {
      return v;
    }
    return v.slice(0, size) + ' ...';
  }

}
