import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInstanceComponent } from './project-instance.component';

describe('ProjectInstanceComponent', () => {
  let component: ProjectInstanceComponent;
  let fixture: ComponentFixture<ProjectInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
