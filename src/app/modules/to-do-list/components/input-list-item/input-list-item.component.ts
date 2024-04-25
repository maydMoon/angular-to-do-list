import { Component, Input} from '@angular/core';

// Interface
import { IListItems } from '../../../interface/iListItems.interface';

@Component({
  selector: 'app-input-list-item',
  standalone: true,
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.scss'
})

export class InputListItemComponent {
  @Input({ required: true }) public inputListItems: IListItems[] = [];
}
