import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-veg-box-horizon',
  templateUrl: './veg-box-horizon.component.html',
  styleUrls: ['./veg-box-horizon.component.scss']
})
export class VegBoxHorizonComponent implements OnInit {
  @Input() item: any;
  environment: any;
  constructor() { 
    this.environment = environment;
  }

  ngOnInit() {
  }

}
