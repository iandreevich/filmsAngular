import { Films } from '../film.service';
import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: '.films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css'],
})
export class FilmsListComponent implements OnInit {
  description: string = 'Parent component data';
  films: Films[] = [];
  favoritesFilms: Array<object> = [];
  count: number = 0;

  constructor(public filmsService: FilmService) {}

  ngOnInit() {
    this.films = this.filmsService.getFilms();
    this.favoritesFilms = this.filmsService.getFavFilms();
  }
  alphabetFilter(value: string) {
    this.filmsService.filterFilms(value);
  }
  addToFav(id: number) {
    this.filmsService.addToFavorites(id);
    this.favoritesFilms = this.films.filter((el) => el.fav === true);
  }
}
