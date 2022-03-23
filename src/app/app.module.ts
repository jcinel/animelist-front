import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { AnimesComponent } from './modules/animes/animes.component';
import { AnimesService } from './services/animes.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, AnimesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
