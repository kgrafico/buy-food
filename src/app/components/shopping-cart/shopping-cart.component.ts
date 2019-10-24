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
  
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.getShoppingCart().subscribe(data => {
      console.log(data);
      this.shoppingCart = data;
      this.total = this.shoppingCartService.getTotal();
    },
      error => alert(error));
  }

  removeProduct(food, i) {
    this.shoppingCartService.removeShoppingCart(food, i);
  }

}
