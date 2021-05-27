import { Component, OnInit } from '@angular/core';
import { pageConfig } from './page5.config';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss'],
})
export class Page5Component implements OnInit {
  private configPage5 = { ...pageConfig };
  private name = { first: 'Tzvika', lastname: 'Pik' };

  ngOnInit(): void {
    this.configPage5.name.getName = () => this.name;
  }
}
