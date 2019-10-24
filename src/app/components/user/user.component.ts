import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

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
