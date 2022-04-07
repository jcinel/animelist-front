import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Anime } from '../../interfaces/anime';
import { AnimelistService } from '../../services/animelist.service';

@Component({
  selector: 'app-listar-animelist',
  templateUrl: './listar-animelist.component.html',
  styleUrls: ['./listar-animelist.component.css']
})
export class ListarAnimelistComponent implements OnInit, OnChanges {

  @Input()
  usuarioId: number = -1;

  animes: Array<Anime> = new Array();

  displayId: number = -1;

  displayEdit: boolean = false;

  displayedColumns: string[] = ['nome', 'autor', 'nota', 'status', 'editar'];

  constructor(private animelistService: AnimelistService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.listarAnimelist();
  }

  ngOnInit(): void {
  
  }

  listarAnimelist(){
    this.animelistService.listarAnimelist(this.usuarioId).subscribe({
      next: animesResponse => {
        this.animes = animesResponse;
      },
      error: err => {
        console.log('Erro ao listar os animes', err);
      }
    })
  }

  mostrarAtualizar(id: number){
    this.displayId = id;
    this.displayEdit = true;
  }
}
