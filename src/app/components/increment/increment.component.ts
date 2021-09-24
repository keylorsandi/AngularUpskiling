import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.scss']
})
export class IncrementComponent implements OnInit {

  @Input('value') progress: number = 50;
  @Input() btnClass:string = "btn-primary"
  @Output() sendValue:EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass=`btn ${this.btnClass}`
  }

  changeProgress (value: number) {

    if (this.progress >= 100 && value >= 0) {
      this.sendValue.emit(100);
       this.progress = 100;
       return
    }
    if (this.progress <= 0 && value <= 0) {
      this.sendValue.emit(0);
       this.progress = 0;
       return
    }

    this.progress += value;
    this.sendValue.emit(this.progress);
  }

}
