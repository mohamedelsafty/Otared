import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareInstancesComponent } from './compare-instances.component';

describe('CompareInstancesComponent', () => {
  let component: CompareInstancesComponent;
  let fixture: ComponentFixture<CompareInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
