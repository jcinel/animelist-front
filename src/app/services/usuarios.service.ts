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
    return this.http.post("http://localhost:8080/api/users", usuario);
  }

  listarUsuarios(page: number = 0, size: number = 10) : Observable<UsuarioResponse> {
    return this.http.get<UsuarioResponse>(`http://localhost:8080/api/users?sort=id&page=${page}&size=${size}`);
  }

  detalharUsuarios(id: any) : Observable<any>{
    return this.http.get("http://localhost:8080/api/users/".concat(id));
  }

  atualizarUsuario(id: any, usuario: Usuario) : Observable<any> {
    return this.http.put("http://localhost:8080/api/users/".concat(id), usuario);
  } 

  deletarUsuario(id: any) : Observable<any> {
    return this.http.delete("http://localhost:8080/api/users/".concat(id), {responseType: 'text'});
  }
}
