import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-veg-list',
  templateUrl: './veg-list.component.html',
  styleUrls: ['./veg-list.component.scss']
})
export class VegListComponent implements OnInit {
  @Input() items: any[];

  constructor() { 

  }

  ngOnInit() {

  }
}
