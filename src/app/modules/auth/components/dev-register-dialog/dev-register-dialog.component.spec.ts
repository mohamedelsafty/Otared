import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevRegisterDialogComponent } from './dev-register-dialog.component';

describe('DevRegisterDialogComponent', () => {
  let component: DevRegisterDialogComponent;
  let fixture: ComponentFixture<DevRegisterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevRegisterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevRegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
