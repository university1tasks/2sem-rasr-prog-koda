abstract class Figure {
  public shape: string;

  constructor(shape: string) {
    this.shape = shape;
  }
}

class BlueRicky extends Figure {
  constructor() {
    super("J");
  }
}

class OrangeRicky extends Figure {
  constructor() {
    super("L");
  }
}

class Hero extends Figure {
  constructor() {
    super("I");
  }
}

abstract class FigureCreator {
  public abstract create(): Figure;
}

class BlueRickyCreator extends FigureCreator {
  public create(): BlueRicky {
    return new BlueRicky();
  }
}

class OrangeRickyCreator extends FigureCreator {
  public create(): OrangeRicky {
    return new OrangeRicky();
  }
}

class HeroCreator extends FigureCreator {
  public create(): Hero {
    return new Hero();
  }
}

const creators: Array<FigureCreator> = [
  new BlueRickyCreator(),
  new OrangeRickyCreator(),
  new HeroCreator(),
];
const creator: FigureCreator =
  creators[Math.floor(Math.random() * creators.length)];
const randomFigure: Figure = creator.create();
