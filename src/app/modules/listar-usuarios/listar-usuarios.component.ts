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

  displayDetails: boolean = false;

  displayEdit: boolean = false;
  
  displayId: number = -1;

  page: number = 0;

  pageMax: number = 1000;

  displayedColumns: string[] = ['nome', 'nascimento', 'email', 'detalhar', 'editar']

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
    this.listarUsuarios();
  }

  paginaAnterior(){
    if (this.page > 0) {
      this.page = this.page - 1;
    }
    this.listarUsuarios();
  }

}
