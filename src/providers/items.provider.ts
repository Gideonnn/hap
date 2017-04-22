import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Item } from "../models/item.model";

@Injectable()
export class Items {
  items: Item[] = [];

  constructor() {
    const items = [
      {
        "name": "Eiwit",
        "icon": "assets/img/categories/protien.svg",
        "amount": 0,
        "goalAmount": 2,
        "maxAmount": 2
      },
      {
        "name": "Fruit",
        "icon": "assets/img/categories/fruit.svg",
        "amount": 0,
        "goalAmount": 2,
        "maxAmount": 2
      },
      {
        "name": "Groenten",
        "icon": "assets/img/categories/vegatables.svg",
        "amount": 0,
        "goalAmount": 2,
        "maxAmount": 9999
      },
      {
        "name": "Koolhydraten",
        "icon": "assets/img/categories/carbohydrates.svg",
        "amount": 0,
        "goalAmount": 2,
        "maxAmount": 2
      },
      {
        "name": "Zuivel",
        "icon": "assets/img/categories/dairy.svg",
        "amount": 0,
        "goalAmount": 2,
        "maxAmount": 2
      },
      {
        "name": "Water",
        "icon": "assets/img/categories/water.svg",
        "amount": 0,
        "goalAmount": 5,
        "maxAmount": 9999
      },
      {
        "name": "Joker",
        "icon": "assets/img/categories/wildcard.svg",
        "amount": 0,
        "goalAmount": 0,
        "maxAmount": 0
      }
    ];

    for (let item of items) {

      // Decide id based on previous item
      let id: number;
      if (this.items.length > 0) {
        const lastItem = this.items[this.items.length - 1];
        id = lastItem.id + 1;
      } else {
        id = 1;
      }

      this.items.push(new Item(id, item.name, item.icon, item.amount, item.goalAmount, item.maxAmount));
    }
  }
}
