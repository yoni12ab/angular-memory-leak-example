import { Component, OnInit } from '@angular/core';
import { pageConfig } from './page3.config';
import { getBigString } from '../app.utils';

@Component({
  selector: 'app-page5',
  templateUrl: './page3.component.html',
})
export class Page3Component implements OnInit {
  private bigStringPage3 = getBigString('page3');
  private configPage5 = { ...pageConfig };
  private name = { first: 'Tzvika', lastname: 'Pik' };

  ngOnInit(): void {
    this.configPage5.name.getName = () => this.name;
    console.log('config id', this.configPage5.id);
  }
}
