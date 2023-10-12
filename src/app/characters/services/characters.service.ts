import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CharactersResponse } from '../interfaces/characters-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl:string = environment.baseUrl;

  constructor(
    private http:HttpClient
  ){}

  getAllCharacters(page:number=1, name:string=''):Observable<CharactersResponse>{
    return this.http.get<CharactersResponse>(`${this.baseUrl}/character/?page=${page}&name=${name}`)
  }

}
