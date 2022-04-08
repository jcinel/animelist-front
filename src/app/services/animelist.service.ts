import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimeList } from '../interfaces/animeList';

@Injectable({
  providedIn: 'root'
})
export class AnimelistService {

  constructor(private http: HttpClient) { }

  listarAnimelist(id: number) : Observable<AnimeList[]>{
    return this.http.get<AnimeList[]>(`http://localhost:8080/api/users/${id}/animes`)
  }

  atualizarAnimelist(usuarioId: number, anime: AnimeList) : Observable<any>{
    return this.http.put(`http://localhost:8080/api/users/${usuarioId}/animes/${anime.id}`, anime);
  }

  deletarAnimelist(usuarioId: number, id: number) : Observable<any>{
    return this.http.delete(`http://localhost:8080/api/users/${usuarioId}/animes/${id}`, {responseType: 'text'});
  }
}
