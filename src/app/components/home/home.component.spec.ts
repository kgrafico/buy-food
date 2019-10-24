import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FoodSearchComponent } from '../food-search/food-search.component';
import { UserListComponent } from '../user-list/user-list.component';
import { StringfilterPipe } from 'src/app/stringfilter.pipe';
import { UserComponent } from '../user/user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        HomeComponent,
        FoodSearchComponent,
        UserListComponent,
        StringfilterPipe,
        UserComponent,
        ShoppingCartComponent,
        ShoppingCartService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
