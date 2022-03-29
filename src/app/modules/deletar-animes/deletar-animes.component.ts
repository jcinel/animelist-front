import { Component, Input, OnInit } from '@angular/core';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-deletar-animes',
  templateUrl: './deletar-animes.component.html',
  styleUrls: ['./deletar-animes.component.css']
})
export class DeletarAnimesComponent implements OnInit {

  @Input()
  id: number = -1;

  constructor(private animesService: AnimesService) { }

  ngOnInit(): void {
  }

  deletarAnime(){
    this.animesService.deletarAnime(this.id).subscribe({
      next: _ => {
        alert('Anime deletado com sucesso');
      },
      error: err => {
        console.log('Erro ao deletar anime', err);
      }
    })
  }
}
