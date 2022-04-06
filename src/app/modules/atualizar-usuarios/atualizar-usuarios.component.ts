import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-atualizar-usuarios',
  templateUrl: './atualizar-usuarios.component.html',
  styleUrls: ['./atualizar-usuarios.component.css']
})
export class AtualizarUsuariosComponent implements OnInit {

  usuario: Usuario = {
    id: -1,
    nome: '',
    dataNasc: '',
    email: '',
  };

  @Input()
  id: number = -1;

  constructor(private usuariosService: UsuariosService) { }

  ngOnChanges(changes: SimpleChange): void {
    this.detalharUsuario();
  }

  ngOnInit(): void {
  }

  detalharUsuario(){
    this.usuariosService.detalharUsuarios(this.id).subscribe({
      next: usuario => {
        this.usuario = usuario;
      },
      error: err => {
        console.log('Erro ao encontrar o usuario', err);
      }
    })
  }

  atualizarUsuario(){
    this.usuariosService.atualizarUsuario(this.usuario.id, this.usuario).subscribe({
      next: usuario => {
        alert('Usuário atualizado com sucesso');
        window.location.reload();
      },
      error: err => {
        console.log('Erro ao atualizar usuário', err);
      }
    })
  }

}
