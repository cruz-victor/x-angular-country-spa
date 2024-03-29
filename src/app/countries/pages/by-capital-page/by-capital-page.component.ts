import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
})
export class ByCapitalPageComponent implements OnInit {
  public placeholder: string = 'Buscar por capital';

  public countries: Country[] = [];
  public isLoading: boolean = false;

  public initialValue:string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byCapital.countries;
    this.initialValue=this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading=true;
    //(vic)
    //Es obligatorio subscribirse.
    //Analogia, si no te suscribes a un canal de youtube jamas vas a recibir notificaciones
    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading=false;
    });

    console.log('Desde ByCapitalPage');
    console.log({ term });
  }
}
