import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { getBigString } from '../app.utils';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
})
export class Page1Component implements OnInit {
  private bigStringPage1 = getBigString('page1');

  ngOnInit(): void {
    fromEvent(document, 'click').subscribe(this.something.bind(this));
  }

  private something() {
    console.count('page 1 something');
  }
}
