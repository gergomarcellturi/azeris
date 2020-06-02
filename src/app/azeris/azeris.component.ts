import { Component, OnInit } from '@angular/core';
import {Tipus} from '../model/Tipus';
import {Engedely, Megkotes} from '../model/Megkotes';
import {Jutsu} from '../model/Jutsu';

@Component({
  selector: 'app-azeris',
  templateUrl: './azeris.component.html',
  styleUrls: ['./azeris.component.css']
})
export class AzerisComponent implements OnInit {

  /**
   * Típusok:
   * Sima
   * Katon
   * Suiton
   * Fuuton
   * Doton
   * Raiton
   * Senjutsu
   * Titkos
   * Fuuin
   * Bijuu
   * Iryou
   * Suanagakure
   * Yami
   * Kugutsu
   * Kinjutsu
   * Hoshigakure
   * Genjutsu
   * Taijutsu
   * Kenjutsu
   * Jiton
   * Suchiruton
   * Shakuton
   * Ketsuiton
   * Bakuton
   * Mokuton
   * Hikariton
   * Tenseigan
   * Youton
   * Yugeton
   * Meimeikyan
   * Byakugan
   * Akuton
   * Jinton
   * Shiruhi
   * Sharingan
   * Midoriyugan
   * Hyoton
   * Ranmaru
   * Rinnegan
   * Souma no Kou
   * Shikotsumyaku
   */

  public suiton = new Tipus('suiton', 'Víz', '水', '#00FFFF');
  public moderatori =  new Megkotes('Bunshin no Jutsu', Engedely.MODERATORI);
  public url = [
    new URL('https://de.narutopedia.eu/images/thumb/e/e1/Hijutsukirisame.png/250px-Hijutsukirisame.png'),
    // tslint:disable-next-line:max-line-length
    new URL('https://vignette.wikia.nocookie.net/denaruto3/images/d/d5/Kirisame01.PNG/revision/latest/top-crop/width/360/height/450?cb=20100205182000&path-prefix=de'),
  ];

  public kirisame = new Jutsu(
    'Hijutsu: Kirisame',
    'Titkos Technika: Szitáló Eső',
    800,
    'S',
    'Kos, Kutya, Patkány',
    // tslint:disable-next-line:max-line-length
    'Ez a jutsu Kirigakure egyik titkos technikája, melyet az Oinin-ek előszeretettel használnak. Szükséges hozzá a Kirigakure no Jutsu ismerete. Ha a köd már elég sűrű, ezt a technikát használva a köd víztartalmát kipárologtatva a ködfelhőn belül esőt hozhatunk létre, mely meggátolja az ellenfél mozgását, összezavarja, és a jutsuk hatásfokát, korlátozza: A technikák amivel az esőcseppek érintkezésbe kerülnek, ezáltal a bennük tárolódó chakra is, folyamatosan veszítenek a chakratartalmukból, így a gyengébb technikák létre sem jönnek, az erősebbek pedig gyengébbek lesznek.',
    'Megjegyzes teszt',
    'figyelmeztetes teszt',
    this.suiton,
    this.moderatori,
    'Kirigakure Oinin',
    this.url
  );

  /**
   * <iframe src="localhost:4200" title="W3Schools Free Online Web Tutorials"></iframe>
   */
  constructor() { }

  ngOnInit(): void {
  }

}
