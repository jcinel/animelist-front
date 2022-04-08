import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimeList } from '../interfaces/animeList';

@Injectable({
  providedIn: 'root'
})
export class AnimelistService {

  constructor(private http: HttpClient) { }

  listarAnimelist(id: any) : Observable<AnimeList[]>{
    return this.http.get<AnimeList[]>(`http://localhost:8080/api/users/${id}/animes`)
  }

  atualizarAnimelist(usuarioId: any, anime: AnimeList) : Observable<any>{
    return this.http.put(`http://localhost:8080/api/users/${usuarioId}/animes/${anime.id}`, anime);
  }
}
