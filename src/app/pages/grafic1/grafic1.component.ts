import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafic1',
  templateUrl: './grafic1.component.html',
  styleUrls: ['./grafic1.component.scss']
})
export class Grafic1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public label1: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1: MultiDataSet = [
    [180, 200, 100],
  ];
  public label2: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data2: MultiDataSet = [
    [350, 450, 100],
  ];
  public label3: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data3: MultiDataSet = [
    [350, 450, 100],
  ];
  public label4: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data4: MultiDataSet = [
    [350, 450, 100],
  ];


}


