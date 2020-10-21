import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchInstancesComponent } from './search-instances.component';



describe('SearchInstancesComponent', () => {
  let component: SearchInstancesComponent;
  let fixture: ComponentFixture<SearchInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
