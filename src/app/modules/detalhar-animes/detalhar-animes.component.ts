import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Anime } from 'src/app/interfaces/anime';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-detalhar-animes',
  templateUrl: './detalhar-animes.component.html',
  styleUrls: ['./detalhar-animes.component.css']
})
export class DetalharAnimesComponent implements OnInit, OnChanges {
  
  anime: Anime = {
    id: -1,
    nome: '',
    autor: ''
  };

  @Input()
  id: number = -1;

  constructor(private animesService: AnimesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.detalharAnimes(this.id);
  }

  ngOnInit(): void { }

  detalharAnimes(id: number){
    this.animesService.detalharAnimes(id).subscribe({
      next: anime => {
        this.anime = anime;
      },
      error: err => {
        console.log('Erro ao encontrar o anime', err);
      }
    })
  }

  atualizarAnime(id: number){
    this.animesService.atualizarAnime(id, this.anime).subscribe({
      next: anime => {
        alert('Anime atualizado com sucesso');
      },
      error: err => {
        console.log('Erro ao atualizar anime', err);
      }
    })
  }

  deletarAnime(id: number){
    this.animesService.deletarAnime(id).subscribe({
      next: _ => {
        alert('Anime deletado com sucesso');
      },
      error: err => {
        console.log('Erro ao deletar anime', err);
      }
    })
  }
}
