import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Input()
  public placeholder:string='';

  @Output()
  public onValueEmitter=new EventEmitter<string>();

  emitValue(term:string): void {
    console.log('Desde search-box');
    console.log({term});
    this.onValueEmitter.emit(term);
  }
}
