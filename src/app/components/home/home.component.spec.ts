import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FoodSearchComponent } from '../food-search/food-search.component';
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodComponent } from '../food/food.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { StringfilterPipe } from '../../stringfilter.pipe';
import { CheckVoucherComponent } from '../check-voucher/check-voucher.component';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [
        HomeComponent,
        FoodSearchComponent,
        FoodListComponent,
        StringfilterPipe,
        FoodComponent,
        ShoppingCartComponent,
        CheckVoucherComponent
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
