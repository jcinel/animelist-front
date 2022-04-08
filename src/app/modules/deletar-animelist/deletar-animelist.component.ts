import { Component, Input, OnInit } from '@angular/core';
import { AnimelistService } from 'src/app/services/animelist.service';

@Component({
  selector: 'app-deletar-animelist',
  templateUrl: './deletar-animelist.component.html',
  styleUrls: ['./deletar-animelist.component.css']
})
export class DeletarAnimelistComponent implements OnInit {

  @Input()
  usuarioId: number = -1;

  @Input()
  id: number = -1;

  constructor(private animelistService: AnimelistService) { }

  ngOnInit(): void {
  }

  deletarAnimelist(){
    this.animelistService.deletarAnimelist(this.usuarioId, this.id).subscribe({
      next: _ => {
        alert('Anime deletado com sucesso');
        window.location.reload();
      },
      error: err => {
        console.log('Erro ao deletar anime', err);
      }
    })
  }
}
