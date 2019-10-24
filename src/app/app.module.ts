import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FoodSearchComponent } from './components/food-search/food-search.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { StringfilterPipe } from './stringfilter.pipe';
import { ListPostComponent } from './components/list-post/list-post.component';
import { PostComponent } from './components/post/post.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    FoodSearchComponent,
    UserComponent,
    StringfilterPipe,
    ListPostComponent,
    PostComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
