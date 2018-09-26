import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";

import { ToggleService } from "./toggle.service";
import { AppComponent } from "./app.component";
import { ProductItemsComponent } from "./product-items/product-items.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { HomeCarouselComponent } from "./home-carousel/home-carousel.component";
import { HomeLandingComponent } from "./home-landing/home-landing.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarCartComponent } from "./sidebar-cart/sidebar-cart.component";
import { ModalCheckoutComponent } from "./modal-checkout/modal-checkout.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { ModalComponent } from "./modal/modal.component";
import { SafeHtmlPipe } from "./safe-html.pipe";
import { CartItemsComponent } from './cart-items/cart-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemsComponent,
    ProductDetailsComponent,
    HomeCarouselComponent,
    HomeLandingComponent,
    HeaderComponent,
    FooterComponent,
    SidebarCartComponent,
    ModalCheckoutComponent,
    HomeComponent,
    ModalComponent,
    SafeHtmlPipe,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAQJr92VOhg0iXSvziHhxHiG4PYuuoU5Jg"
    }),
    ScrollToModule.forRoot()
  ],
  providers: [ToggleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
