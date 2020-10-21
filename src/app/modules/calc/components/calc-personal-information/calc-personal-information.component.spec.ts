import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcPersonalInformationComponent } from './calc-personal-information.component';

describe('CalcFinancialInformationComponent', () => {
  let component: CalcPersonalInformationComponent;
  let fixture: ComponentFixture<CalcPersonalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcPersonalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
