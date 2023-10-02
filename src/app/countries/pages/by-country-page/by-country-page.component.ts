import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit {
  public placeholder:string='Buscar por pais';
  public countries:Country[] = [];
  public initialValue:string = '';

  constructor(private countriesService:CountriesService){
  }

  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byCountries.countries;
    this.initialValue=this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(term:string){
    this.countriesService.searchCountry(term).subscribe(countries=>{this.countries=countries;});
  }
}
