import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceChangeStateDialogComponent } from './instance-change-state-dialog.component';

describe('InstanceChangeStateDialogComponent', () => {
  let component: InstanceChangeStateDialogComponent;
  let fixture: ComponentFixture<InstanceChangeStateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceChangeStateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceChangeStateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
