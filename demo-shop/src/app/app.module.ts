import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ErrorPagesComponent} from './error-pages/error-pages.component';
import {ProductsDetailsPageComponent} from './main/products-details-page/products-details-page.component';
import {ProductsListPageComponent} from './main/products-list-page/products-list-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {routing} from "./app.routing";
import {FormsModule} from "@angular/forms";
import {ErrorHandlerService} from "./services/error-handler.service";
import {MainComponent} from './main/main.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ProductDetailCardComponent} from './main/products-details-page/product-detail-card/product-detail-card.component';
import {ProductListCardComponent} from "./main/products-list-page/product-list-card/product-list-card.component";

@NgModule({
  declarations: [
    AppComponent,
    ErrorPagesComponent,
    ProductsDetailsPageComponent,
    ProductsListPageComponent,
    LoginPageComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailCardComponent,
    ProductListCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    ErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}