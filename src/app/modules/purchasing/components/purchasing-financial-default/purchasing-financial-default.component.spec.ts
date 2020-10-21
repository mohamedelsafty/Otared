import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingFinancialDefaultComponent } from './purchasing-financial-default.component';

describe('PurchasingFinancialDefaultComponent', () => {
  let component: PurchasingFinancialDefaultComponent;
  let fixture: ComponentFixture<PurchasingFinancialDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingFinancialDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingFinancialDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
