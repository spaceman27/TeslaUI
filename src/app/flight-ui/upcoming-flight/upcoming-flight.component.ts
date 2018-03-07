import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upcoming-flight',
  templateUrl: './upcoming-flight.component.html',
  styleUrls: ['./upcoming-flight.component.scss']
})
export class UpcomingFlightComponent implements OnInit, OnChanges {
  lst: any[];
  constructor() {
    this.lst = new Array<any>(
      { gateName: 'A1', flightName: 'UA 1254', destination: 'BK', scheduleTime: '12:09', actualTime: '12:09', actualField: 'POBT'},
      { gateName: 'A1', flightName: 'DL 254', destination: 'VN', scheduleTime: '15:09', actualTime: '15:09', actualField: 'POBT'},
      { gateName: 'A2', flightName: 'DL 333', destination: 'THL', scheduleTime: '20:00', actualTime: '20:00', actualField: 'POBT'}
    );
  }
  ngOnChanges(changes: any): void {

  }

  ngOnInit() {}
}
