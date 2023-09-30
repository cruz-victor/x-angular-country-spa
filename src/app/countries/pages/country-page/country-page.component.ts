import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { map, switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent implements OnInit {
  public country?:Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private countriesService: CountriesService
  ) {}

  //ngOnInit(), realiza tareas de inicializacion
  ngOnInit(): void {
    //Si el usuario puede ver el component  usar ngOnInit
    //v1
    // this.activatedRoute.params
    // .subscribe(params=>{
    //   console.log({params: params['id']});

    //   this.countriesService.searchCountryByAlphaCode(params['id'])
    //   .subscribe(country=>{console.log({country})});

    // });

    //v2
    // this.activatedRoute.params
    // .subscribe(({id})=>{
    //   this.searchCountry(id);
    // });

    //v3
    //switchMap, siempre manaje la solicitud mas reciente y cancela las solicitudes anteriores sino se han complementado
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe(country => {
        if(!country) return this.router.navigateByUrl('');

        console.log('tenemos un pais...');

        return this.country=country;
      });
  }
}
