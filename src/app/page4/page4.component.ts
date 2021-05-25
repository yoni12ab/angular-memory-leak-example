import { Component, OnDestroy, OnInit } from '@angular/core';
import { SomeService } from '../some.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { STRING_CHAR_SIZE } from '../app.consts';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss'],
})
export class Page4Component implements OnInit {
  private bigStringHome = Array.from(
    { length: STRING_CHAR_SIZE },
    () => 'Page4'
  ).join();

  constructor(private someService: SomeService) {}

  ngOnInit(): void {
    this.someService
      .getStateSubject()
      .subscribe(() => this.doSomething('Yoni'));
  }

  private doSomething(text: string): void {
    console.log(text);
  }
}