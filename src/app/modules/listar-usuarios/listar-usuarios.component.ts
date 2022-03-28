import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: Array<Usuario> = new Array();

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.usuariosService.listarUsuarios().subscribe({
      next: usuariosResponse => {
        this.usuarios = usuariosResponse.content;
      },
      error: err => {
        console.log('Erro ao listar os usuários', err);
      }
    })
  }

}
