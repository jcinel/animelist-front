import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimeResponse } from '../interfaces/animeResponse';
import { CriarAnime } from '../interfaces/criar-anime';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private http: HttpClient) { }

  criarAnime(anime: CriarAnime): Observable<any>{
    return this.http.post("http://localhost:8080/api/animes", anime);
  }

  listarAnimes() : Observable<AnimeResponse>{
    return this.http.get<AnimeResponse>("http://localhost:8080/api/animes");
  }
}
