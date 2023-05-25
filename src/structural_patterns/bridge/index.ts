interface Store {
  storage: any;
  nextId: number;

  add(item: any): void;
  delete(id: number): void;
  get(id: number): any;
}

class ArrayStore implements Store {
  public storage: Array<any> = [];
  public nextId: number = 0;

  public add(item: any) {
    this.storage.push(item);
    this.nextId++;
  }

  public delete(id: number) {
    this.storage.splice(id, 1);
  }

  public get(id: number): any {
    return this.storage[id];
  }
}

class MapStore implements Store {
  public storage: Map<number, any> = new Map();
  public nextId: number = 0;

  public add(item: any) {
    this.storage.set(this.nextId, item);
    this.nextId++;
  }

  public delete(id: number) {
    this.storage.delete(id);
  }

  public get(id: number): any {
    return this.storage.get(id);
  }
}

abstract class Bunch {
  public store: Store;
  public limit: number = 100;

  constructor(...items: any[]) {
    this.store = items.length > this.limit ? new MapStore() : new ArrayStore();
    for (let item of items) {
      this.store.add(item);
    }
  }
}

class NumbersBunch extends Bunch {
  constructor(...items: number[]) {
    super(items);
  }

  public max(): number {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < this.store.nextId; i++) {
      const item: number = this.store.get(i);
      if (item > max) max = item;
    }
    return max;
  }
}

class StringsBunch extends Bunch {
  constructor(...items: string[]) {
    super(items);
  }

  public firstContains(substr: string): string | null {
    for (let i = 0; i < this.store.nextId; i++) {
      const item: string = this.store.get(i);
      if (item.includes(substr)) return item;
    }
    return null;
  }
}
