import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcAvailableOffersComponent } from './calc-available-offers.component';

describe('CalcAvailableOffersComponent', () => {
  let component: CalcAvailableOffersComponent;
  let fixture: ComponentFixture<CalcAvailableOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcAvailableOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcAvailableOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
