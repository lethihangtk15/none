import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';
import { SlideComponent } from './main/slide/slide.component';
import { ListItemComponent } from './product/list-item/list-item.component';
import { DetailItemComponent } from './product/detail-item/detail-item.component';
import { CartComponent } from './product/cart/cart.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    ProductComponent,
    NewsComponent,
    SlideComponent,
    ListItemComponent,
    DetailItemComponent,
    CartComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
