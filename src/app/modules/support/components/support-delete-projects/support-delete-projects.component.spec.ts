import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDeleteProjectsComponent } from './support-delete-projects.component';

describe('SupportDeleteProjectsComponent', () => {
  let component: SupportDeleteProjectsComponent;
  let fixture: ComponentFixture<SupportDeleteProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportDeleteProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportDeleteProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
