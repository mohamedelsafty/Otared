import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevRegisterFormComponent } from './dev-register-form.component';

describe('DevRegisterFormComponent', () => {
  let component: DevRegisterFormComponent;
  let fixture: ComponentFixture<DevRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
