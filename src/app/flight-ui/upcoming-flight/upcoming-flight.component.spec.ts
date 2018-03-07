import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingFlightComponent } from './upcoming-flight.component';

describe('UpcomingFlightComponent', () => {
  let component: UpcomingFlightComponent;
  let fixture: ComponentFixture<UpcomingFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
