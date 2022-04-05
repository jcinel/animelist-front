import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtualizarAnimesComponent } from './modules/atualizar-animes/atualizar-animes.component';
import { CriarAnimesComponent } from './modules/criar-animes/criar-animes.component';
import { CriarUsuariosComponent } from './modules/criar-usuarios/criar-usuarios.component';
import { DetalharAnimesComponent } from './modules/detalhar-animes/detalhar-animes.component';
import { HomeComponent } from './modules/home/home.component';
import { ListarAnimesComponent } from './modules/listar-animes/listar-animes.component';
import { ListarUsuariosComponent } from './modules/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'animes/criar', component: CriarAnimesComponent },
  { path: 'animes/listar', component: ListarAnimesComponent },
  { path: 'animes/detalhar', component: DetalharAnimesComponent },
  { path: 'animes/atualizar', component: AtualizarAnimesComponent },
  { path: 'usuarios/criar', component: CriarUsuariosComponent },
  { path: 'usuarios/listar', component: ListarUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
