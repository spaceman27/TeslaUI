import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFlightComponent } from './current-flight.component';

describe('CurrentFlightComponent', () => {
  let component: CurrentFlightComponent;
  let fixture: ComponentFixture<CurrentFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
