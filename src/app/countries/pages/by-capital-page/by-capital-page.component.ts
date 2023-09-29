import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
})
export class ByCapitalPageComponent {
  public placeholder:string='Buscar por capital';

  public countries:Country[]=[];

  constructor(private countriesService:CountriesService){

  }

  searchByCapital(term:string): void {
    //Es obligatorio subscribirse.
    //Analogia, si no te suscribes a un canal de youtube jamas vas a recibir notificaciones
    this.countriesService.searchCapital(term)
    .subscribe(countries=>{this.countries=countries;});

    console.log('Desde ByCapitalPage');
    console.log({term});
  }
}
