import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { getBigString } from '../app.utils';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
})
export class Page4Component implements OnInit {
  @ViewChild('domElem', { static: true }) domElem: ElementRef;
  private globalObj = window as any;
  private bigStringPage3 = getBigString('page4');
  constructor() {}

  ngOnInit(): void {
    this.globalObj.cache = (window as any).cache || new Map();
    this.globalObj.cache.set(this.domElem.nativeElement, { someData: '' });
  }
}
