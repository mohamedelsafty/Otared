import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceCardActionsComponent } from './instance-card-actions.component';

describe('InstanceCardActionsComponent', () => {
  let component: InstanceCardActionsComponent;
  let fixture: ComponentFixture<InstanceCardActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceCardActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
