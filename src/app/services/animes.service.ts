import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimeResponse } from '../interfaces/animeResponse';
import { CriarAnime } from '../interfaces/criar-anime';
import { Anime } from '../interfaces/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private http: HttpClient) { }

  criarAnime(anime: CriarAnime): Observable<any>{
    return this.http.post("http://localhost:8080/api/animes", anime);
  }

  listarAnimes(page: number = 0, size: number = 10): Observable<AnimeResponse>{
    return this.http.get<AnimeResponse>(`http://localhost:8080/api/animes?sort=id&page=${page}&size=${size}`);
  }

  detalharAnimes(id: any): Observable<any>{
    return this.http.get("http://localhost:8080/api/animes/".concat(id));
  }

  atualizarAnime(id: any, anime: Anime): Observable<any>{
    return this.http.put("http://localhost:8080/api/animes/".concat(id), anime);
  }

  deletarAnime(id: any): Observable<any>{
    return this.http.delete("http://localhost:8080/api/animes/".concat(id), {responseType: 'text'});
  }

  listaAnimes(): Observable<AnimeResponse>{
    const page = 0;
    const size = 100;
    return this.http.get<AnimeResponse>(`http://localhost:8080/api/animes?sort=nome&page=${page}&size=${size}`);
  }
}
