import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDeveloperPageComponent } from './public-developer-page.component';

describe('PublicDeveloperPageComponent', () => {
  let component: PublicDeveloperPageComponent;
  let fixture: ComponentFixture<PublicDeveloperPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicDeveloperPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDeveloperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
