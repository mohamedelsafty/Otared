import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitRequestDialogComponent } from './visit-request-dialog.component';

describe('VisitRequestDialogComponent', () => {
  let component: VisitRequestDialogComponent;
  let fixture: ComponentFixture<VisitRequestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitRequestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
