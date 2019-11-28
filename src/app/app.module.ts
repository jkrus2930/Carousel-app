import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SliderComponent } from "./components/slider/slider.component";
import { PhotosService, HeaderInterceptorService } from "./_services/index";
import { CarouselComponent } from "./components/carousel/carousel.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselItemDirective } from "./_directives/carousel-item.directive";
import { AddSliderComponent } from "./components/carousel/add-slider/add-slider.component";
import { CarouselControlsComponent } from "./components/carousel/carousel-controls/carousel-controls.component";

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CarouselComponent,
    AddSliderComponent,
    CarouselControlsComponent,
    CarouselItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PhotosService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
