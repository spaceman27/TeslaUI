import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ILoveVeggieComponent } from './iloveveggie.component';

describe('IloveveggieComponent', () => {
  let component: ILoveVeggieComponent;
  let fixture: ComponentFixture<ILoveVeggieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ILoveVeggieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ILoveVeggieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
