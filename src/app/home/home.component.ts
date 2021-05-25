import { Component, OnInit } from '@angular/core';
import { SomeService } from '../some.service';
import { take } from 'rxjs/operators';
import { STRING_CHAR_SIZE } from '../app.consts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private bigStringHome = Array.from(
    { length: STRING_CHAR_SIZE },
    () => 'Home'
  ).join();

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
