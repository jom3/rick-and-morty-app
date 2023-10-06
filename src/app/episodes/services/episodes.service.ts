import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { EpisodesResponse } from '../interfaces/episodes-response.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  baseUrl:string = environment.baseUrl;

  constructor(
    private http:HttpClient
  ){}

  getAllEpisodes(page:number=1):Observable<EpisodesResponse>{
    return this.http.get<EpisodesResponse>(`${this.baseUrl}/episode?page=${page}`)
  }
}
