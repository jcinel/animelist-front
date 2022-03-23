import { Component, OnInit } from '@angular/core';
import { Anime } from '../../interfaces/anime';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-animes',
  templateUrl: './listar-animes.component.html',
  styleUrls: ['./listar-animes.component.css']
})
export class ListarAnimesComponent implements OnInit {

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
