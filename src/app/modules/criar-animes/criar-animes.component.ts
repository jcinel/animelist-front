import { Component, Input, OnInit } from '@angular/core';
import { CriarAnime } from 'src/app/interfaces/criar-anime';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-criar-animes',
  templateUrl: './criar-animes.component.html',
  styleUrls: ['./criar-animes.component.css']
})
export class CriarAnimesComponent implements OnInit {

  anime: CriarAnime = new CriarAnime();

  constructor(private animesService: AnimesService) { }

  ngOnInit(): void {
  }

  criarAnime(){
    console.log(this.anime);
    this.animesService.criarAnime(this.anime).subscribe({
      next: anime => {
        alert('Anime criado com sucesso');
      },
      error: err => {
        console.log('Erro ao criar novo anime', err);
      }
    })
  }

}
