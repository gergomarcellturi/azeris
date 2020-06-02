export class Megkotes {
  megkotes: string;
  engedely: Engedely;

  constructor(megkotes: string, engedely: Engedely) {
    this.megkotes = megkotes;
    this.engedely = engedely;
  }
}

export enum Engedely {
  ENGEDELYES = 0,
  MODERATORI = 1,
  SIMA = 2
}


