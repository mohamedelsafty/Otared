import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperBaseComponent } from './developer-base.component';

describe('DeveloperBaseComponent', () => {
  let component: DeveloperBaseComponent;
  let fixture: ComponentFixture<DeveloperBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
