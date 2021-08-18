import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent implements OnInit {
  @Input() film: any;
  @Output() addToFav = new EventEmitter<number>();

  constructor() {}

  addToFavorite(id: number) {
    this.addToFav.emit(id);
  }

  ngOnInit() {}
}
