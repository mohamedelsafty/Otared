import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportChangeStateDialogComponent } from './support-change-state-dialog.component';

describe('SupportChangeStateDialogComponent', () => {
  let component: SupportChangeStateDialogComponent;
  let fixture: ComponentFixture<SupportChangeStateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportChangeStateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportChangeStateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
