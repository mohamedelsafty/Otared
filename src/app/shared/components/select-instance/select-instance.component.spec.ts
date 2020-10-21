import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInstanceComponent } from './select-instance.component';

describe('SelectInstanceComponent', () => {
  let component: SelectInstanceComponent;
  let fixture: ComponentFixture<SelectInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
