import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodSearchComponent } from './components/food-search/food-search.component';
import { FoodComponent } from './components/food/food.component';
import { HttpClientModule } from '@angular/common/http';
import { StringfilterPipe } from './stringfilter.pipe';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckVoucherComponent } from './components/check-voucher/check-voucher.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodListComponent,
    FoodSearchComponent,
    FoodComponent,
    StringfilterPipe,
    ShoppingCartComponent,
    CheckVoucherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
