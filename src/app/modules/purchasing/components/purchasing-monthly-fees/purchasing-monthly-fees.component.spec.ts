import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingMonthlyFeesComponent } from './purchasing-monthly-fees.component';

describe('PurchasingMonthlyFeesComponent', () => {
  let component: PurchasingMonthlyFeesComponent;
  let fixture: ComponentFixture<PurchasingMonthlyFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingMonthlyFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingMonthlyFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
