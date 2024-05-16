import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeComponentsComponent } from './home-components/home-components.component';
import { DeliveryComponentsComponent } from './shared/components/delivery-components/delivery-components.component';
import { DisplayComponentsComponent } from './shared/components/display-components/display-components.component';
import { DisplayDataComponentsComponent } from './shared/components/display-data-components/display-data-components.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponentsComponent,
    DeliveryComponentsComponent,
    DisplayComponentsComponent,
    DisplayDataComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
