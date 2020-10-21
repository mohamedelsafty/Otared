import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcSupportInformationComponent } from './calc-support-information.component';

describe('CalcSupportInformationComponent', () => {
  let component: CalcSupportInformationComponent;
  let fixture: ComponentFixture<CalcSupportInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcSupportInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcSupportInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
