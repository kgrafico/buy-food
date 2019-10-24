import { Injectable } from '@angular/core';
import { Food } from '../food/food.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private subject: BehaviorSubject<Food[]> = new BehaviorSubject([]);
  private item: Food[] = [];

  constructor() { this.subject.subscribe(data => this.item = data); }

  /**
   * addShoppingCart
   * @param product
   */
  addShoppingCart(product: Food) {
    this.subject.next([...this.item, product]);
  }

  /**
   * removeShoppingCart
   * @param product
   */
  removeShoppingCart(product: Food, i) {
    this.item.forEach((item, index) => {
        if (i === index && item === product) { this.item.splice(i, 1); }
    });
    this.subject.next(this.item);
  }

  /**
   * clearShoppingCart
   */
  clearShoppingCart() {
    this.subject.next(null);
  }

  /**
   * getShoppingCart
   */
  getShoppingCart(): Observable<Food[]> {
    return this.subject;
  }

  /**
   * getTotal
   */
  getTotal() {
    return this.item.reduce((total, product: Food) => {
      if (product && product.voucher) {
        return total + product.offert;
      }
      return total + product.price;
    }, 0);
  }
}
