import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFavouriteComponent } from './customer-favourite.component';

describe('CustomerFavouriteComponent', () => {
  let component: CustomerFavouriteComponent;
  let fixture: ComponentFixture<CustomerFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
