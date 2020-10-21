import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportNewAccountsComponent } from './support-new-accounts.component';

describe('SupportNewAccountsComponent', () => {
  let component: SupportNewAccountsComponent;
  let fixture: ComponentFixture<SupportNewAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportNewAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportNewAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
