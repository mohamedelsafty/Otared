import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportNewAccountsAcceptanceComponent } from './support-new-accounts-acceptance.component';

describe('SupportNewAccountsAcceptanceComponent', () => {
  let component: SupportNewAccountsAcceptanceComponent;
  let fixture: ComponentFixture<SupportNewAccountsAcceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportNewAccountsAcceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportNewAccountsAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
