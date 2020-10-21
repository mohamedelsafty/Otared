import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportAllUnitsComponent } from './support-all-units.component';

describe('SupportAllUnitsComponent', () => {
  let component: SupportAllUnitsComponent;
  let fixture: ComponentFixture<SupportAllUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportAllUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportAllUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
