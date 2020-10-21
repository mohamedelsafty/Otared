import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFinanceRequestComponent } from './customer-finance-request.component';

describe('CustomerFinanceRequestComponent', () => {
  let component: CustomerFinanceRequestComponent;
  let fixture: ComponentFixture<CustomerFinanceRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFinanceRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFinanceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
