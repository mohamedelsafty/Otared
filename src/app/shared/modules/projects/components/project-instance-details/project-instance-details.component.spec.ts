import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInstanceDetailsComponent } from './project-instance-details.component';

describe('ProjectInstanceDetailsComponent', () => {
  let component: ProjectInstanceDetailsComponent;
  let fixture: ComponentFixture<ProjectInstanceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInstanceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInstanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
