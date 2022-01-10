import { Component, OnInit } from '@angular/core';
import {FilmsService} from "../../system/services/films.service";
import {IFilms} from "../../system/interfaces/films.interfaces";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  public films: Array<IFilms>=[];

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
