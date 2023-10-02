import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  //(vic)
  //Debouncer: Es un tipo de observable creado manualmente. Propi de RxJs
  //debouncerSuscription: Permite quitar un suscriptor de un observable para liberar memoria
  //En los observables de Angular, quitar la susbcripcion se hace automaticamente
  private debouncer:Subject<string>=new Subject<string>();
  private debouncerSuscription?:Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue:string = '';

  @Output()
  public onValueEmitter = new EventEmitter<string>();

  @Output()
  public onDebounceEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    //Inicializa el compomente
    this.debouncerSuscription =  this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe(value=>{
      //console.log('debouncer value',value);
      this.onDebounceEmitter.emit(value);
    });
  }

  ngOnDestroy(): void {
    console.log('Destruido')
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue(term: string): void {
    console.log('Desde search-box');
    console.log({ term });
    this.onValueEmitter.emit(term);
  }

  onKeyPress(searchTerm: string) {
    //con next se emite un valor al observable (propio de RxJs)
    this.debouncer.next(searchTerm);

  }

}
