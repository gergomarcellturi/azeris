export class Tipus {
  id: string;
  tipus: string;
  kanji: string;
  color: string;

  constructor(id: string, tipus: string, kanji?: string, color?: string) {
    this.id = id;
    this.tipus = tipus;
    this.kanji = kanji || '忍';
    this.color = color || '#171717';
  }
}
