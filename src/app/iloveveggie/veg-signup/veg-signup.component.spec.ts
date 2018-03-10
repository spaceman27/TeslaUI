import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegSignupComponent } from './veg-signup.component';

describe('VegSignupComponent', () => {
  let component: VegSignupComponent;
  let fixture: ComponentFixture<VegSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
