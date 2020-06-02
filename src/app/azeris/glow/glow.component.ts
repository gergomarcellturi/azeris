import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Jutsu} from '../../model/Jutsu';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-glow',
  templateUrl: './glow.component.html',
  styleUrls: ['./glow.component.css']
})
export class GlowComponent implements OnInit {

  @Input() jutsu: Jutsu;

  @HostBinding('attr.style')
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--color-var: ${this.jutsu.tipus.color}`);
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.jutsu.kep);
  }

  public titleStyling() {
    const style = {
      'background-image': `linear-gradient(to right, #363636, rgba(255, 0, 0, 0)`,
    };
    return style;
  }
}
