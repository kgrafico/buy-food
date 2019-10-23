import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { UserInterface } from '../../interface/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listUser: UserInterface[];
  listFood: Array<object>;
  filter: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.getUsers().subscribe((data) => {this.listUser = data; console.log(data); });
    this.userService.getFood().subscribe((food) => {this.listFood = food; console.log(food); });
  }

  onText(text: string) {
    debugger;
   this.filter = text;
  }



}
