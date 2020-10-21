import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportUniteDetailsDialogComponent } from './support-unite-details-dialog.component';

describe('SupportUniteDetailsDialogComponent', () => {
  let component: SupportUniteDetailsDialogComponent;
  let fixture: ComponentFixture<SupportUniteDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportUniteDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportUniteDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
