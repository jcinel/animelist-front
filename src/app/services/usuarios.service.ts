import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioResponse } from '../interfaces/usuarioResponse';
import { Usuario } from '../interfaces/usuario';
import { CriarUsuario } from '../interfaces/criar-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  criarUsuario(usuario: CriarUsuario): Observable<any> {
    return this.http.post("http://localhost:8080/api/usuarios", usuario);
  }

  listarUsuarios() : Observable<UsuarioResponse> {
    return this.http.get<UsuarioResponse>("http://localhost:8080/api/usuarios");
  }

}
