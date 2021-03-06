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
import { ListarAnimelistComponent } from './modules/listar-animelist/listar-animelist.component';
import { CriarAnimelistComponent } from './modules/criar-animelist/criar-animelist.component';
import { AtualizarAnimelistComponent } from './modules/atualizar-animelist/atualizar-animelist.component';
import { DeletarAnimelistComponent } from './modules/deletar-animelist/deletar-animelist.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AccordionModule } from 'primeng/accordion'; 
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AnimeFiltroPipe } from './modules/listar-animes/anime.pipe';
import { UsuarioFiltroPipe } from './modules/listar-usuarios/usuario.pipe';

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
    TopBarComponent,
    ListarAnimelistComponent,
    CriarAnimelistComponent,
    AtualizarAnimelistComponent,
    DeletarAnimelistComponent,
    AnimeFiltroPipe,
    UsuarioFiltroPipe
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
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    AccordionModule,
    DropdownModule,
    InputTextModule
  ],
  providers: [HttpClientModule, AnimesService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
