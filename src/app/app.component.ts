import { Component, ViewEncapsulation } from '@angular/core';
import { Cell } from './models/cell/cell.model';

const ROW = 4, COLUMN = 4;

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
}
