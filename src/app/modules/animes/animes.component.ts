import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/interfaces/anime';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {

  animes: Array<Anime> = new Array();

  constructor(private animesService: AnimesService) { }

  ngOnInit(): void {
    this.listarAnimes();
  }

  listarAnimes(){
    this.animesService.listarAnimes().subscribe({
      next: animesResponse => {
        this.animes = animesResponse.content;
      },
      error: err => {
        console.log('Erro ao listar os animes', err);
      }
    })
  }
}
