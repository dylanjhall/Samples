import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.svg',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BlocksComponent {
  blockSize = 3;
  colCount = Math.floor(1000 / this.blockSize);
  /** generate the blocks.. create the ammount that will fit */
  blocks = Array.from({ length: this.colCount * this.colCount }, (_, i) => ({
    fillColor: this.randomColor(),
    x: this.calcX(i),
    y: this.calcY(i),
    id: i
  }));
  /** input so e can do something */
  @Input() set recolor(x: any) {
    if (x) {
      this._recolor();
    }
  }
  /** fire an event when an rectangle is clicked. */
  @Output() rectClicked = new EventEmitter<number>();

  /** export the number of cells */
  @Output() cellCount = new EventEmitter<number>();
  constructor() {
    setTimeout(() => {
      this.cellCount.emit(this.blocks.length - 1);
    });
  }

  /** lick handler */
  sendRectNumber(ev: MouseEvent) {
    ev.preventDefault();
    ev.stopPropagation();
    const rect = ev.target as SVGRectElement;
    /** only handle clicks on rectangles, those will have an ID */
    if (!isNaN(Number(rect.dataset.id))) {
      this.rectClicked.emit(Number(rect.dataset.id));
    }
  }

  /** calculate column number */
  calcX(i: number) {
    const rowsDone = Math.floor(i / this.colCount) * this.colCount;
    return (i - rowsDone) * this.blockSize;
  }

  /** calculate row number */
  calcY(i: number) {
    return Math.floor(i / this.colCount) * this.blockSize;
  }

  /** give all the blocks a new color */
  _recolor() {
    this.blocks.forEach(block => (block.fillColor = this.randomColor()));
    console.log(`Changed the color of ${this.blocks.length - 1} blocks`);
  }

  /** helper to generate a random color */
  randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
}
