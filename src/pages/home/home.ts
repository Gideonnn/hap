import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

// Actions
import { INCREMENT, DECREMENT } from '../../store/categories.reducer'

// Models
import { AppState } from '../../models/appstate.model';
import { Category } from '../../models/category.model';

// Providers
import { Categories } from '../../providers/categories.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public categories: Category[];

  constructor(private _store: Store<AppState>, categories: Categories) {

    // Subscribe to feature store updates
    _store.subscribe(state => {
      this.categories = state.categories;
    });

    // Load initial categories data
    categories.load();
  }

  ngOnInit() {

  }

  decrement(category: Category) {
    this._store.dispatch({ type: DECREMENT, payload: category });
  }

  increment(category: Category) {
    this._store.dispatch({ type: INCREMENT, payload: category});
  }
}
