import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  @Input()
  displayAddAnime: boolean = false;

  @Input()
  displayAddUsuario: boolean = false;

  ngOnInit(): void {
  }

  paginaHome(){
    const baseUrl = window.location.href.split("/", 1)[0];
    window.location.href = baseUrl;
  }

  paginaAnimes(){
    const baseUrl = window.location.href.split("/", 1)[0];
    window.location.href = baseUrl.concat("/animes/listar");
  }

  paginaUsuarios(){
    const baseUrl = window.location.href.split("/", 1)[0];
    window.location.href = baseUrl.concat("/usuarios/listar");
  }

  paginaAnimesCriar(){
    const baseUrl = window.location.href.split("/", 1)[0];
    window.location.href = baseUrl.concat("/animes/criar");
  }

  paginaUsuariosCriar(){
    const baseUrl = window.location.href.split("/", 1)[0];
    window.location.href = baseUrl.concat("/usuarios/criar");
  }
}
