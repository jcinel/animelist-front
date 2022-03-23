import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { ListarAnimesComponent } from './modules/listar-animes/listar-animes.component';
import { AnimesService } from './services/animes.service';
import { FormsModule } from '@angular/forms';
import { CriarAnimesComponent } from './modules/criar-animes/criar-animes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarAnimesComponent,
    CriarAnimesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule, AnimesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
