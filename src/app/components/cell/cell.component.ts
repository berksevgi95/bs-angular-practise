import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {

  @Input() id: string;

  @Input() headIndex: number;

  @Input() footerIndex: number;

  @Input() state: boolean;
  @Output() stateChange = new EventEmitter<boolean>();

  constructor() { }

  toggle() {
    this.stateChange.emit(!this.state)
  }

}
