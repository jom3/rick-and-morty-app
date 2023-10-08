import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LocationsResponse } from '../interfaces/locations-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  baseUrl:string = environment.baseUrl;

  constructor(
    private http:HttpClient
  ){}

  getAllLocations(page:number=1):Observable<LocationsResponse>{
    return this.http.get<LocationsResponse>(`${this.baseUrl}/location/?page=${page}`)
  }

}
