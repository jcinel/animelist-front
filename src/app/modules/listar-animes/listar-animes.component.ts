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

  displayEdit: boolean = false;

  displayId: number = -1;

  page: number = 0;

  pageMax: number = 1000;

  displayedColumns: string[] = ['nome', 'autor', 'detalhar', 'editar'];

  constructor(private animesService: AnimesService) { }

  ngOnInit(): void {
    this.listarAnimes();
  }

  listarAnimes(){
    this.animesService.listarAnimes(this.page, 10).subscribe({
      next: animesResponse => {
        this.animes = animesResponse.content;
        this.pageMax = animesResponse.totalPages;
      },
      error: err => {
        console.log('Erro ao listar os animes', err);
      }
    })
  }

  mostrarDetalhes(id: number){
    this.displayId = id;
    this.displayDetails = true;
    this.displayEdit = false;
  }

  mostrarAtualizar(id: number){
    this.displayId = id;
    this.displayDetails = false;
    this.displayEdit = true;
  }
  
  proximaPagina(){
    if (this.page < this.pageMax - 1) {
      this.page = this.page + 1;
    }
    this.listarAnimes();
  }

  paginaAnterior(){
    if (this.page > 0) {
      this.page = this.page - 1;
    }
    this.listarAnimes();
  }
}
