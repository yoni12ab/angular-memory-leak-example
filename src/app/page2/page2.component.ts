import { Component, OnInit } from '@angular/core';
import { SomeService } from '../some.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component {
  private bigStringPage2 = Array.from({ length: 20000 }, () => 'Page2').join();
}
