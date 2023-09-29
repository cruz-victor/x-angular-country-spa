import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

//Definir las routes
const routes:Routes=[
  {
    path: '',
    component:HomePageComponent
  },
  {
    path: 'about',
    component:AboutPageComponent
  },
  {
    path:'contact',
    component:ContactPageComponent
  },
  {
    path:'countries',
    loadChildren: () => import('./countries/countries.module').then(m=>m.CountriesModule)
  },
  {
    path:'**',
    redirectTo:''
  }
];

// RouterModule.forRoot, usar cuando es la definicion de rutas principal
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRountingModule { }
