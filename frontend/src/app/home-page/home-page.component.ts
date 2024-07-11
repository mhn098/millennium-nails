import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public static Route = {
    path: 'home-page',
    title: 'Home Page',
    component: HomePageComponent,
    canActivate: []
  };
  constructor() {}
}
