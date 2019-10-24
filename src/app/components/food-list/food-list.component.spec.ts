import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListComponent } from './food-list.component';
import { FoodComponent } from '../food/food.component';
import { StringfilterPipe } from '../../stringfilter.pipe';

describe('FoodListComponent', () => {
  let component: FoodListComponent;
  let fixture: ComponentFixture<FoodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodListComponent, StringfilterPipe, FoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
