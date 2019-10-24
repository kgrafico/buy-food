import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/food/food.interface';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  private shoppingCart: Array<Food> = [];
  private subscription: Subscription;
  private total: number;
  private discount = 0;
  private discountDrinks = false ;
  private discountCooking = false;
  private discountName: string;
  private discountSign: string;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.getShoppingCart().subscribe(data => {
      const getTotal = this.shoppingCartService.getTotal();

      this.shoppingCart = data;
      this.discount = this.getDiscount(data, getTotal);
      const calcTotal = getTotal - this.discount;

      this.total = this.trunc(calcTotal, 2);
    },
      error => alert(error));
  }

  trunc(x, position = 0) {
    const s = x.toString();
    const decimalLength = s.indexOf('.') + 1;
    const numStr = s.substr(0, decimalLength + position);
    return Number(numStr);
  }

  getDiscount(data, getTotal) {
    const discountDrinks = data.reduce((ac, el) => {
        ac[el.category] = (ac[el.category] || 0) + 1;
        return ac;
    }, {});

    if (discountDrinks && discountDrinks.Drinks >= 10) {
      this.discountDrinks = true;
      this.discountName = 'Drinks';
      this.discountSign = '10%';
      return this.trunc(getTotal * 0.1, 2);
    }

    const discountCookingBaking = data.reduce((ac, el) => {
      ac[el.category] = (ac[el.category] || 0) + el.price;
      return ac;
    }, {});

    if (discountCookingBaking && discountCookingBaking['Baking/Cooking Ingredients'] >= 50) {
      this.discountCooking = true;
      this.discountName = 'Baking/Cooking Ingredients';
      this.discountSign = '5£';
      return 5;
    }
    return 0;
  }
  removeProduct(food, i) {
    this.shoppingCartService.removeShoppingCart(food, i);
  }

}
