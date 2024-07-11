import { Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  HomePageComponent.Route,
{
  path: '',
  title: 'Home Page',
  loadComponent: () =>
    import('./home-page/home-page.component').then(
      (m) => m.HomePageComponent
    )
},];
// { path: '', redirectTo: 'main-page', pathMatch: 'full' }, // default route
// { path: '**', redirectTo: 'main-page' }]; // wildcard route

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }