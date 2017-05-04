import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

// Actions
import { INIT_DATA } from '../store/categories.reducer'

// Models
import { AppState } from '../models/appstate.model';

@Injectable()
export class Categories {

  constructor(private _store: Store<AppState>) {}

  public load(): void {

    const categories = [
      { "name": "Eiwit", "icon": "assets/img/categories/protien.svg", "amount": 0, "goalAmount": 2, "maxAmount": 2 },
      { "name": "Fruit", "icon": "assets/img/categories/fruit.svg", "amount": 0, "goalAmount": 2, "maxAmount": 2 },
      { "name": "Groenten", "icon": "assets/img/categories/vegatables.svg", "amount": 0, "goalAmount": 2, "maxAmount": 9999 },
      { "name": "Koolhydraten", "icon": "assets/img/categories/carbohydrates.svg", "amount": 0, "goalAmount": 2, "maxAmount": 2 },
      { "name": "Zuivel", "icon": "assets/img/categories/dairy.svg", "amount": 0, "goalAmount": 2, "maxAmount": 2 },
      { "name": "Water", "icon": "assets/img/categories/water.svg", "amount": 0, "goalAmount": 5, "maxAmount": 9999 },
      { "name": "Joker", "icon": "assets/img/categories/wildcard.svg", "amount": 0, "goalAmount": 0, "maxAmount": 0 }
    ];

    this._store.dispatch({ type: INIT_DATA, payload: categories });
  }
}
