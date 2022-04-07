import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anime } from '../interfaces/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimelistService {

  constructor(private http: HttpClient) { }

  listarAnimelist(id: any) : Observable<Anime[]>{
    return this.http.get<Anime[]>(`http://localhost:8080/api/users/${id}/animes`)
  }
}
