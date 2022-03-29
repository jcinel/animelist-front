import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../../interfaces/anime';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-atualizar-animes',
  templateUrl: './atualizar-animes.component.html',
  styleUrls: ['./atualizar-animes.component.css']
})
export class AtualizarAnimesComponent implements OnInit {

  anime: Anime = {
    id: -1,
    nome: '',
    autor: ''
  };

  @Input()
  id: number = -1;

  constructor(private animesService: AnimesService) { }

  ngOnInit(): void {
    this.animesService.detalharAnimes(this.id).subscribe({
      next: anime => {
        this.anime = anime;
      },
      error: err => {
        console.log('Erro ao encontrar o anime', err);
      }
    })
  }

  atualizarAnime(){
    this.animesService.atualizarAnime(this.anime.id, this.anime).subscribe({
      next: anime => {
        alert('Anime atualizado com sucesso');
      },
      error: err => {
        console.log('Erro ao atualizar anime', err);
      }
    })
  }
}
