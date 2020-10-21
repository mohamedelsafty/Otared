import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportNewAccountsRefuseComponent } from './support-new-accounts-refuse.component';

describe('SupportNewAccountsRefuseComponent', () => {
  let component: SupportNewAccountsRefuseComponent;
  let fixture: ComponentFixture<SupportNewAccountsRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportNewAccountsRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportNewAccountsRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
