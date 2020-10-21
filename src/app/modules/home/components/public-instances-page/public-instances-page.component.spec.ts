import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicInstancesPageComponent } from './public-instances-page.component';

describe('PublicInstancesPageComponent', () => {
  let component: PublicInstancesPageComponent;
  let fixture: ComponentFixture<PublicInstancesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicInstancesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicInstancesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
