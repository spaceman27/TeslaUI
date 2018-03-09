import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-veg-box',
  templateUrl: './veg-box.component.html',
  styleUrls: ['./veg-box.component.scss']
})
export class VegBoxComponent implements OnInit {
  @Input() item: any;
  environment: any;
  constructor() {
    this.environment = environment;
  }

  ngOnInit() {
  }

}
