import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { STRING_CHAR_SIZE } from '../app.consts';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  private bigStringPage1 = Array.from(
    { length: STRING_CHAR_SIZE },
    () => 'Page1'
  ).join();

  ngOnInit(): void {
    fromEvent(document, 'click').subscribe(this.something.bind(this));
  }

  private something() {
    console.count('page 1 something');
  }
}
