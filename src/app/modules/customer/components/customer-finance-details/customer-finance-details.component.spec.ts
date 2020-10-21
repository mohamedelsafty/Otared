import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFinanceDetailsComponent } from './customer-finance-details.component';

describe('CustomerFinanceDetailsComponent', () => {
  let component: CustomerFinanceDetailsComponent;
  let fixture: ComponentFixture<CustomerFinanceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFinanceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFinanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
