import { Category } from './category.model';

export class Record {
  constructor(public key: Date, public categories: Category[] ) {}
}
