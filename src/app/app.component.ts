import { Component, ViewEncapsulation } from '@angular/core';
import { Cell } from './models/cell/cell.model';
import { Form } from './models/form/form';

export const ROW = 4
export const COLUMN = 4;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  cellArr: Cell[][] = [];

  constructor() {
    this.initializeCellArr();
  }

  initializeCellArr() {
    for(let i = 0; i < ROW; i ++) {
      this.cellArr[i] = []
      for(let j = 0; j < COLUMN; j ++) {
        this.cellArr[i][j] = {
          state: false
        }
      }
    }
  }

  onFormSubmit(value: Form) {
    if (this.cellArr[ROW - value.y][value.x - 1].state.valueOf() !== value.setTo.valueOf())
      document.getElementById(`${value.y} ${value.x}`).click()
  }
}
