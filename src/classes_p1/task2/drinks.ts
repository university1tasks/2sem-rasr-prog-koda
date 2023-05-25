interface Drink {
  price: number;
  alcoholic: boolean;
}

interface CompositeDrink {
  components: Array<Drink>;
}

abstract class BaseDrink implements Drink {
  private _price: number;
  private _alcoholic: boolean;

  constructor(price: number, alcoholic: boolean) {
    this._price = price;
    this._alcoholic = alcoholic;
  }

  public get price(): number {
    return this._price;
  }

  public get alcoholic(): boolean {
    return this._alcoholic;
  }
}

abstract class BaseCompositeDrink extends BaseDrink implements CompositeDrink {
  private _components: Array<Drink>;

  constructor(components: Array<Drink>) {
    let price: number = 0;
    let alcoholic: boolean = false;
    for (let drink of components) {
      price += drink.price;
      if (!alcoholic && drink.alcoholic) {
        alcoholic = true;
      }
    }

    super(price, alcoholic);
    this._components = components;
  }

  public get components(): Array<Drink> {
    return this._components;
  }
}

export class OrangeJuice extends BaseDrink {
  constructor() {
    super(200, false);
  }
}

export class MohitoNonAlc extends BaseDrink {
  constructor() {
    super(250, false);
  }
}

export class Vodka extends BaseDrink {
  constructor() {
    super(300, true);
  }
}

export class Otvertka extends BaseCompositeDrink {
  constructor() {
    super([new Vodka(), new OrangeJuice()]);
  }
}
export class MohitoAlc extends BaseCompositeDrink {
  constructor() {
    super([new Vodka(), new MohitoNonAlc()]);
  }
}
