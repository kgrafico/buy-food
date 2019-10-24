
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  @Input() food: any;
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}

  /**
   * addProducto
   */
  addProduct(food) {
    this.shoppingCartService.addShoppingCart(food);
  }

}
