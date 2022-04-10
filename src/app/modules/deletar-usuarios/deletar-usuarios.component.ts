import { Component, Input, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-deletar-usuarios',
  templateUrl: './deletar-usuarios.component.html',
  styleUrls: ['./deletar-usuarios.component.css']
})
export class DeletarUsuariosComponent implements OnInit {

  @Input()
  usuarioId: number = -1;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  deletarUsuario(){
    this.usuariosService.deletarUsuario(this.usuarioId).subscribe({
      next: _ => {
        alert('Usuário deletado com sucesso');
        window.location.reload();

      },
      error: err => {
        console.log('Erro ao deletar usuário', err);
        alert("Erro ao deletar usuário");
      }
    })
  }
}
