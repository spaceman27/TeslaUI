import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketVerticalComponent } from './ticket-vertical.component';

describe('TicketVerticalComponent', () => {
  let component: TicketVerticalComponent;
  let fixture: ComponentFixture<TicketVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
