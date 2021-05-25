import { Component, OnInit } from '@angular/core';
import { SomeService } from '../../some.service';

@Component({
  selector: 'app-page2inner2',
  templateUrl: './page2inner2.component.html',
  styleUrls: ['./page2inner2.component.scss'],
})
export class Page2inner2Component implements OnInit {
  constructor(private someService: SomeService) {}

  ngOnInit(): void {
    this.someService.getState().subscribe(this.afterStateChanged.bind(this));
  }

  afterStateChanged(text: string): void {
    console.log('page2', text);
  }

  inputChange(event: any) {
    this.someService.addState(event.target.value);
  }
}
