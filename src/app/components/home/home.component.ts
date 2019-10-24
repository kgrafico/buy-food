import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listFood: Array<object>;
  filter: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getFood().subscribe((food) => {this.listFood = food; console.log(food); });
  }

  onText(text: string) {
   this.filter = text;
  }



}
