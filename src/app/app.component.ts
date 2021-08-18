import { Component } from '@angular/core';

export interface Links {
  path: string;
  label: string;
  active: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  links: Links[] = [
    { path: '/main', label: 'Главная', active: 'button-active', icon: 'home' },
    {
      path: '/films',
      label: 'Все фильмы',
      active: 'button-active',
      icon: 'list_alt',
    },
  ];
}
