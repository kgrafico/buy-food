import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListComponent } from './food-list.component';
import { UserComponent } from '../user/user.component';
import { StringfilterPipe } from '../../stringfilter.pipe';

describe('FoodListComponent', () => {
  let component: FoodListComponent;
  let fixture: ComponentFixture<FoodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodListComponent, StringfilterPipe, UserComponent ]
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
