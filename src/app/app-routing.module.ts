import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarAnimesComponent } from './modules/criar-animes/criar-animes.component';
import { DetalharAnimesComponent } from './modules/detalhar-animes/detalhar-animes.component';
import { ListarAnimesComponent } from './modules/listar-animes/listar-animes.component';
import { HomeComponent } from './views/home/home.component';
import { ListarUsuariosComponent } from './modules/listar-usuarios/listar-usuarios.component';
import { CriarUsuariosComponent } from './modules/criar-usuarios/criar-usuarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'animes/criar', component: CriarAnimesComponent },
  { path: 'animes/listar', component: ListarAnimesComponent },
  { path: 'animes/detalhar', component: DetalharAnimesComponent },
  { path: 'usuarios/criar', component: CriarUsuariosComponent },
  { path: 'usuarios/listar', component: ListarUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
