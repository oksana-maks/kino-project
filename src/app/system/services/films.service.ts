import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {IFilms} from "../interfaces/films.interfaces";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private url = environment.BACKEND_ULR;
  private api = { films: `${this.url}/films` };

  constructor( private http: HttpClient) { }

  getAll():Observable<IFilms[]> {
    return this.http.get<IFilms[]>(this.api.films)
  }


}
