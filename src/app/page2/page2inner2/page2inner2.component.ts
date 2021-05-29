import { Component, OnInit } from '@angular/core';
import { SomeService } from '../../some.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-page2inner2',
  templateUrl: './page2inner2.component.html',
})
export class Page2inner2Component implements OnInit {
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
