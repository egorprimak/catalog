import {Pipe, PipeTransform} from '@angular/core';
import {IMG_PATH} from "../core/data/consts/img-path";

@Pipe({
  name: 'emptyImg',
  standalone: true
})
export class EmptyImgPipe implements PipeTransform {

  transform(path: string): string {
    if (!path) {
      return `${IMG_PATH}/empty.jpg`;
    }
    return path;
  }

}
