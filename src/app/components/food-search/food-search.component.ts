import { Component, EventEmitter, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.scss']
})
export class FoodSearchComponent implements OnInit {

  @Output() text = new EventEmitter<string>();

  onSearchChange(text: string) {
    this.text.emit(text);
  }

  constructor() { }

  ngOnInit() {
  }

}
