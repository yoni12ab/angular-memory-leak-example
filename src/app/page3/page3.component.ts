import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
})
export class Page3Component implements OnInit {
  @ViewChild('domElem', { static: true }) domElem: ElementRef;
  private bigStringPage3 = Array.from({ length: 20000 }, () => 'Page3').join();
  constructor() {}

  ngOnInit(): void {
    (window as any).cache = (window as any).cache || [];
    (window as any).cache.push(this.domElem.nativeElement);
  }
}
