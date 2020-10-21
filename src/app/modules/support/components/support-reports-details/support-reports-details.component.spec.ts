import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportReportsDetailsComponent } from './support-reports-details.component';

describe('SupportReportsDetailsComponent', () => {
  let component: SupportReportsDetailsComponent;
  let fixture: ComponentFixture<SupportReportsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportReportsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportReportsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
