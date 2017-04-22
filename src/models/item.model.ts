export class Item {
  constructor(private _id: number,
    public name: string,
    public icon: string,
    public amount: number,
    public goalAmount: number,
    public maxAmount: number) {}

    get id() {
      return this._id;
    }
}
