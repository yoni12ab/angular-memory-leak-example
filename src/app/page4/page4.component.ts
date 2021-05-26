import { Component, OnInit } from '@angular/core';
import { SomeService } from '../some.service';
import { take } from 'rxjs/operators';
import { getBigString } from '../app.utils';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss'],
})
export class Page4Component implements OnInit {
  private bigStringHome = getBigString('page4');

  constructor(private someService: SomeService) {}

  ngOnInit(): void {
    this.someService
      .getStateSubject()
      .pipe(take(1))
      .subscribe(() => this.doSomething('Yoni'));
  }

  private doSomething(text: string): void {
    console.log(text);
  }
}
