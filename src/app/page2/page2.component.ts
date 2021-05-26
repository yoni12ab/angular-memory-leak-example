import { Component } from '@angular/core';
import { getBigString } from '../app.utils';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component {
  private bigStringPage2 = getBigString('page2');
}
