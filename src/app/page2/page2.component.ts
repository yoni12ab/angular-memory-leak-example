import { Component } from '@angular/core';
import { STRING_CHAR_SIZE } from '../app.consts';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component {
  private bigStringPage2 = Array.from(
    { length: STRING_CHAR_SIZE },
    () => 'Page2'
  ).join();
}
