import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private URL = environment.BACKEND_ULR;
  private api = { URL: '${this.url}/news'}

  constructor( private http: HttpClient) { }
}
