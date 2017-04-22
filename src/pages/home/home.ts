import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Models
import { Item } from '../../models/item.model';
import { Items } from '../../providers/items.provider';

// Providers
import { Day } from '../../models/day.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories: Item[];

  constructor(public items: Items,
    public navCtrl: NavController) {
      this.categories = items.items;
    }

  decrement(item: Item) {
    if (item.amount > 0) {
      item.amount--;
    }
  }

  increment(item: Item) {
    item.amount++;
  }
}
