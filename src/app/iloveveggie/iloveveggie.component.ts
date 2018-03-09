import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iloveveggie',
  templateUrl: './iloveveggie.component.html',
  styleUrls: ['./iloveveggie.component.scss']
})
export class ILoveVeggieComponent implements OnInit {
  item: any[];
  constructor() { }

  ngOnInit() {
    this.item = [
      {
        discount: '20% off',
        price: '$3',
        icon: 'broccoli.png',
        vegName: 'Broccoli Flower'
      },
      {
        discount: '',
        price: '$6',
        icon: 'carrot.png',
        vegName: 'Broccoli Flower'
      },
      {
        discount: '',
        price: '$10',
        icon: 'lettute.png',
        vegName: 'Broccoli Flower'
      },
      {
        discount: '20% off',
        price: '$6',
        icon: 'eggplant.png',
        vegName: 'Broccoli Flower'
      }

    ];
  }

}
