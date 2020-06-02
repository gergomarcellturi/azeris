import {Component, Input, OnInit} from '@angular/core';
import {Jutsu} from '../../model/Jutsu';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  @Input()
  jutsu: Jutsu;

  constructor() { }

  ngOnInit(): void {
  }

  public setHeaderStyle() {
    const styles = {
      'background-image': `linear-gradient(to right, ${this.jutsu.tipus.color}, rgba(255,0,0,0)`,
      margin: '-0.1rem'
    };
    return styles;
  }

  public setKanjiStyle() {
    const style = {
      'background-color' : `${this.jutsu.tipus.color}`,
      padding: '0.3rem',
      'border-radius': '1rem 1rem 1rem 1rem'
    };
    return style;
  }

}
