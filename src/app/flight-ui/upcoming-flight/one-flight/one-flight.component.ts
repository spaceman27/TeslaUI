import { Component, OnInit, Input, Output, OnChanges, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-one-flight',
  templateUrl: './one-flight.component.html',
  styleUrls: ['./one-flight.component.scss']
})
export class OneFlightComponent implements OnInit {
  @Input() item: any;

  gateName: string;
  flightName: string;
  destination: string;
  scheduleTime: string;
  actualTime: string;
  actualField: string;
  constructor() {
  }

  ngOnInit() {
   

  }
}
