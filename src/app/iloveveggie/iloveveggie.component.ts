import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iloveveggie',
  templateUrl: './iloveveggie.component.html',
  styleUrls: ['./iloveveggie.component.scss']
})
export class ILoveVeggieComponent implements OnInit {
  items: any[];
  constructor() { }

  ngOnInit() {
    this.items = [
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
        vegName: 'Carrot'
      },
      {
        discount: '',
        price: '$10',
        icon: 'lettute.png',
        vegName: 'Lettuce'
      },
      {
        discount: '20% off',
        price: '$6',
        icon: 'eggplant.png',
        vegName: 'Eggplant'
      }

    ];
  }

}
