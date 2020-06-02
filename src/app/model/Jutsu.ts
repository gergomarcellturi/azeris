import {Megkotes} from './Megkotes';
import {Tipus} from './Tipus';

export class Jutsu {
  japanNev: string;
  magyarNev: string;
  chakraszint: number;
  besorolas: string;
  kezpecsetek: string;
  leiras: string;
  megjegyzes: string;
  figyelmeztetes: string;
  tipus: Tipus;
  megkotes: Megkotes;
  hasznaloja: string;
  kep: URL[];


  constructor(
    japanNev: string,
    magyarNev: string,
    chakraszint: number,
    besorolas: string,
    kezpecseket: string,
    leiras: string,
    megjegyzes: string,
    figyelmeztetes: string,
    tipus: Tipus,
    megkotes: Megkotes,
    hasznaloja: string,
    kep: URL[]
  ) {
    this.japanNev = japanNev;
    this.magyarNev = magyarNev;
    this.chakraszint = chakraszint;
    this.besorolas = besorolas;
    this.kezpecsetek = kezpecseket;
    this.leiras = leiras;
    this.megjegyzes = megjegyzes;
    this.figyelmeztetes = figyelmeztetes;
    this.tipus = tipus;
    this.megjegyzes = megjegyzes;
    this.megkotes = megkotes;
    this.hasznaloja = hasznaloja;
    this.kep = kep;
  }
}

