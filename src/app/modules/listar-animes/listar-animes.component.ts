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

  displayDetails: boolean = false;

  displayId: number = -1;

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

  mostrarDetalhes(id: number){
    this.displayId = id;
    this.displayDetails = true;
  }
}
