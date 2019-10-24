
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  @Input() food: any;
  @Input() foodFilter: string;

  constructor() {}
  ngOnInit() {}

}
