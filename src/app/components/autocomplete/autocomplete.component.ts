import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './autocomplete.component.html',
  styles: []
})
export class AutocompleteComponent implements OnInit {
  
  myControl = new FormControl();
  options_completo: string[] = ['One', 'Two', 'Three'];
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if(filterValue != '') { 
      this.options = this.options_completo;
    } else {
      this.options = [];
    }
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

