import { Component, Input, OnInit } from '@angular/core';
import { AnimeList } from 'src/app/interfaces/animeList';
import { AnimelistService } from 'src/app/services/animelist.service';

@Component({
  selector: 'app-atualizar-animelist',
  templateUrl: './atualizar-animelist.component.html',
  styleUrls: ['./atualizar-animelist.component.css']
})
export class AtualizarAnimelistComponent implements OnInit {

  @Input()
  usuarioId: number = -1;

  @Input()
  anime: AnimeList = {
    id: -1,
    nome: '',
    autor: '',
    nota: -1,
    status: ''
  };

  constructor(private animelistService: AnimelistService) { }

  ngOnInit(): void {
  }

  atualizarAnimelist(){
    this.animelistService.atualizarAnimelist(this.usuarioId, this.anime).subscribe({
      next: anime => {
        alert('Anime atualizado com sucesso');
      },
      error: err => {
        console.log('Erro ao atualizar anime', err);
      }
    })
  }
}
