import { Injectable } from '@angular/core';
import { Food } from '../food/food.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private subject: BehaviorSubject<Food[]> = new BehaviorSubject([]);
  private itemsCarrito: Food[] = [];

  constructor() { this.subject.subscribe(data => this.itemsCarrito = data); }

  /**
   * addShoppingCart
   * @param product
   */
  addShoppingCart(product: Food) {
    this.subject.next([...this.itemsCarrito, product]);
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
    return this.itemsCarrito.reduce((total, product: Food) => { return total + product.price; }, 0);
  }
}
