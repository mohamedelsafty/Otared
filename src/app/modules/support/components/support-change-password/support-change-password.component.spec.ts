import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportChangePasswordComponent } from './support-change-password.component';

describe('SupportChangePasswordComponent', () => {
  let component: SupportChangePasswordComponent;
  let fixture: ComponentFixture<SupportChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
