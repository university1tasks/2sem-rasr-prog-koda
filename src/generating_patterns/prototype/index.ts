interface Clonable {
  clone(): Clonable;
}

class Article implements Clonable {
  private _text: string;

  constructor(text: string) {
    this._text = text;
  }

  public get text(): string {
    return this._text;
  }

  public setText(text: string) {
    this._text = text;
  }

  public clone(): Clonable {
    return new Article(this._text);
  }
}

const original: Article = new Article("original text");

const fork1: Article = original.clone() as Article;
fork1.setText("fork1 text");

const fork2: Article = original.clone() as Article;
fork1.setText("fork2 text");
