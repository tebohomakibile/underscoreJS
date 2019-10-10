import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EachComponent } from './each/each.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    EachComponent,
    MainComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
