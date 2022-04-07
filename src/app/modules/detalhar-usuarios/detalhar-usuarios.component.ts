import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-detalhar-usuarios',
  templateUrl: './detalhar-usuarios.component.html',
  styleUrls: ['./detalhar-usuarios.component.css']
})
export class DetalharUsuariosComponent implements OnInit, OnChanges {

  usuario: Usuario = {
    id: -1,
    nome: '',
    dataNasc: '',
    email: ''
  }

  @Input()
  id: number = -1;

  constructor(private usuariosService: UsuariosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.detalharUsuarios(this.id);
  }

  ngOnInit(): void {
  }

  detalharUsuarios(id: number){
    this.usuariosService.detalharUsuarios(id).subscribe({
      next: usuario => {
        this.usuario = usuario;
      },
      error: err => {
        console.log('Erro ao encontrar o usuário', err);
      }
    })
  }
}
