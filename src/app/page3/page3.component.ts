import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { getBigString } from '../app.utils';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
})
export class Page3Component implements OnInit {
  @ViewChild('domElem', { static: true }) domElem: ElementRef;
  private bigStringPage3 = getBigString('page3');
  constructor() {}

  ngOnInit(): void {
    (window as any).cache = (window as any).cache || [];
    (window as any).cache.push(this.domElem.nativeElement);
  }
}
