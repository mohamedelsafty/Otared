import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevProfileDialogComponent } from './dev-profile-dialog.component';

describe('DevProfileDialogComponent', () => {
  let component: DevProfileDialogComponent;
  let fixture: ComponentFixture<DevProfileDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevProfileDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
