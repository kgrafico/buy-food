import { Component, OnInit, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Food } from '../../food/food.interface';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  private shoppingCart: Array<Food> = [];
  private subscription: Subscription;
  private total: number;
  private discountDrinksPrice = 0;
  private discountCookingPrice = 0;
  private discountVoucher = false;
  private discountDrinks = false;
  private discountCooking = false;
  private discountNameDrinks: string;
  private discountNameCooking: string;
  private discountSignDrinks: string;
  private discountSignCooking: string;
  private calcTotal: number;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.getShoppingCart().subscribe(data => {
      const getTotal = this.shoppingCartService.getTotal();

      this.shoppingCart = data;

      // DISCOUNTS?
      this.discountDrinksPrice = this.getDiscountDrinks(data, getTotal);
      this.discountCookingPrice = this.getDiscountCooking(data, getTotal);
      this.calcTotal = getTotal - this.discountDrinksPrice - this.discountCookingPrice;

      // FINAL RESULT
      this.total = this.trunc(this.calcTotal, 2);
    },
      error => alert(error));
  }

  discountVouche(e) {
    if (this.total >= 100) {
      this.total = this.trunc(this.calcTotal, 2) - 50;
    }
  }

  trunc(x, position = 0) {
    const s = x.toString();
    const decimalLength = s.indexOf('.') + 1;
    const numStr = s.substr(0, decimalLength + position);
    return Number(numStr);
  }

  getDiscountDrinks(data, getTotal) {
    const discountDrinks = data.reduce((ac, el) => {
        ac[el.category] = (ac[el.category] || 0) + 1;
        return ac;
    }, {});

    if (discountDrinks && discountDrinks.Drinks >= 10) {
      this.discountDrinks = true;
      this.discountNameDrinks = 'Drinks';
      this.discountSignDrinks = '10%';
      return this.trunc(getTotal * 0.1, 2);
    }
    this.discountDrinks = false;
    return 0;
  }

  getDiscountCooking(data, getTotal) {
    const discountCookingBaking = data.reduce((ac, el) => {
      ac[el.category] = (ac[el.category] || 0) + el.price;
      return ac;
    }, {});

    if (discountCookingBaking && discountCookingBaking['Baking/Cooking Ingredients'] >= 50) {
      this.discountCooking = true;
      this.discountNameCooking = 'Baking/Cooking Ingredients';
      this.discountSignCooking = '5£';
      return 5;
    }
    this.discountCooking = false;
    return 0;
  }

  removeProduct(food, i) {
    this.shoppingCartService.removeShoppingCart(food, i);
  }

}
