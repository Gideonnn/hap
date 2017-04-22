import { Item } from './item.model';

export class Day {

  constructor(public date: Date,
    public protein: Item = null,
    public fruit: Item = null,
    public vegetables: Item = null,
    public carbohydrates: Item = null,
    public dairy: Item = null,
    public water: Item = null,
    public wildcard: Item = null
  ) {
    this.protein = protein || new Item(0, 'Eiwit', 'assets/img/eetgroepen/protein.svg', 0, 2, 2);
    this.fruit = fruit || new Item(0, 'Fruit', 'assets/img/eetgroepen/fruit.svg', 0, 2, 2);
    this.vegetables = vegetables || new Item(0, 'Groenten', 'assets/img/eetgroepen/vegetables.svg', 0, 2, 2);
    this.carbohydrates = carbohydrates || new Item(0, 'Koolhydraten', 'assets/img/eetgroepen/carbohydrates.svg', 0, 2, 2);
    this.dairy = dairy || new Item(0, 'Zuivel', 'assets/img/eetgroepen/dairy.svg', 0, 2, 2);
    this.water = water || new Item(0, 'Water', 'assets/img/eetgroepen/water.svg', 0, 2, 2);
    this.wildcard = wildcard || new Item(0, 'Joker', 'assets/img/eetgroepen/wildcard.svg', 0, 2, 2);
  }
}
