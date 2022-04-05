import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtualizarAnimesComponent } from './modules/atualizar-animes/atualizar-animes.component';
import { AtualizarUsuariosComponent } from './modules/atualizar-usuarios/atualizar-usuarios.component';
import { CriarAnimesComponent } from './modules/criar-animes/criar-animes.component';
import { CriarUsuariosComponent } from './modules/criar-usuarios/criar-usuarios.component';
import { DeletarAnimesComponent } from './modules/deletar-animes/deletar-animes.component';
import { DeletarUsuariosComponent } from './modules/deletar-usuarios/deletar-usuarios.component';
import { DetalharAnimesComponent } from './modules/detalhar-animes/detalhar-animes.component';
import { DetalharUsuariosComponent } from './modules/detalhar-usuarios/detalhar-usuarios.component';
import { HomeComponent } from './modules/home/home.component';
import { ListarAnimesComponent } from './modules/listar-animes/listar-animes.component';
import { ListarUsuariosComponent } from './modules/listar-usuarios/listar-usuarios.component';
import { TopBarComponent } from './modules/top-bar/top-bar.component';
import { AnimesService } from './services/animes.service';
import { UsuariosService } from './services/usuarios.service';

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
    DeletarUsuariosComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [HttpClientModule, AnimesService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
