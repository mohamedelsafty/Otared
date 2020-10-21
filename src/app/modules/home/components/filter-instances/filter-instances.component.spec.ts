import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInstancesComponent } from './filter-instances.component';

describe('FilterInstancesComponent', () => {
  let component: FilterInstancesComponent;
  let fixture: ComponentFixture<FilterInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
