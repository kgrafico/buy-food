import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodSearchComponent } from './components/food-search/food-search.component';
import { UserComponent } from './components/user/user.component';
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
    UserComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
