import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/interfaces/anime';
import { CriarAnimelist } from 'src/app/interfaces/criarAnimelist';
import { AnimelistService } from 'src/app/services/animelist.service';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-criar-animelist',
  templateUrl: './criar-animelist.component.html',
  styleUrls: ['./criar-animelist.component.css']
})
export class CriarAnimelistComponent implements OnInit {

  @Input()
  usuarioId: number = -1;

  anime: CriarAnimelist = new CriarAnimelist(-1, 0, '');

  animes: Array<Anime> = new Array();

  animeSelecionado: Anime = {id: -1, nome: '', autor: '', sinopse: ''}

  constructor(
    private animelistService: AnimelistService, 
    private animesService: AnimesService
  ) { }

  ngOnInit(): void {
    this.listaAnimes();
  }

  listaAnimes(){
    this.animesService.listaAnimes().subscribe({
      next: animesResponse => {
        this.animes = animesResponse.content;
      },
      error: err => {
        console.log('Erro ao listar os animes', err);
      }
    })
  }

  criarAnimelist(){
    this.anime.id = this.animeSelecionado.id;
    console.log(this.anime);
    this.animelistService.criarAnimelist(this.usuarioId, this.anime).subscribe({
      next: anime => {
        alert('Anime criado com sucesso');
        location.reload();
      },
      error: err => {
        console.log('Erro ao criar novo anime', err);
        alert('Esse anime já existe na lista');
      }
    })
  }
}
