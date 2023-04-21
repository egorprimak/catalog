import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NotFoundComponent {
  @Input() code = 404;
  @Input() description = 'Страница не найдена';
}
