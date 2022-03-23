import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimeResponse } from '../interfaces/animeResponse';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private http: HttpClient) { }

  listarAnimes() : Observable<AnimeResponse>{
    return this.http.get<AnimeResponse>("http://localhost:8080/api/animes");
  }
}
