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
import { DetalharAnimesComponent } from './modules/detalhar-animes/detalhar-animes.component';
import { CriarUsuariosComponent } from './modules/criar-usuarios/criar-usuarios.component';
import { ListarUsuariosComponent } from './modules/listar-usuarios/listar-usuarios.component';
import { DetalharUsuariosComponent } from './modules/detalhar-usuarios/detalhar-usuarios.component';
import { UsuariosService } from './services/usuarios.service';
import { AtualizarAnimesComponent } from './modules/atualizar-animes/atualizar-animes.component';
import { DeletarAnimesComponent } from './modules/deletar-animes/deletar-animes.component';
import { AtualizarUsuariosComponent } from './modules/atualizar-usuarios/atualizar-usuarios.component';
import { DeletarUsuariosComponent } from './modules/deletar-usuarios/deletar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarAnimesComponent,
    CriarAnimesComponent,
    DetalharAnimesComponent,
    CriarUsuariosComponent,
    ListarUsuariosComponent,
    DetalharUsuariosComponent,
    AtualizarAnimesComponent,
    DeletarAnimesComponent,
    AtualizarUsuariosComponent,
    DeletarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule, AnimesService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
