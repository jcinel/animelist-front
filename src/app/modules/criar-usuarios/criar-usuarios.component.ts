import { Component, Input, OnInit } from '@angular/core';
import { CriarUsuario } from '../../interfaces/criar-usuario'
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-criar-usuarios',
  templateUrl: './criar-usuarios.component.html',
  styleUrls: ['./criar-usuarios.component.css']
})
export class CriarUsuariosComponent implements OnInit {

  usuario: CriarUsuario = new CriarUsuario('', '', '', '');

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  criarUsuario(){
    console.log(this.usuario);
    this.usuariosService.criarUsuario(this.usuario).subscribe({
      next: usuario => {
        alert('Usuário criado com sucesso');
        window.location.reload();
      },
      error: err => {
        console.log('Erro ao criar novo usuário', err);
        alert('Este e-mail já está sendo utilizado')
      }
    })
  }

}
