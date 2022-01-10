import { Component, OnInit } from '@angular/core';
import {FilmsService} from "../../../system/services/films.service";
import {IFilms} from "../../../system/interfaces/films.interfaces";

@Component({
  selector: 'app-admin-films',
  templateUrl: './admin-films.component.html',
  styleUrls: ['./admin-films.component.css']
})
export class AdminFilmsComponent implements OnInit {

  public films: Array<IFilms>=[];
  public name!:string;
  public imagePath!:string;
  public description!:string;
  public country!:string;
  public genre!:string;
  public year!:string;
  public producer!:string;
  public duration!:string;
  public age!:string;
  public format!:string;
  public actors!:string;

  constructor( private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.filmsService.getAll().subscribe(data=> {
      this.films=data;
    })
  }

}
