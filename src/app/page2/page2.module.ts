import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';
import { Page2RoutingModule } from './page2-routing.module';
import { Page2inner1Component } from './page2inner1/page2inner1.component';
import { Page2inner2Component } from './page2inner2/page2inner2.component';



@NgModule({
  declarations: [
    Page2Component,
    Page2inner1Component,
    Page2inner2Component
  ],
  imports: [
    CommonModule,
    Page2RoutingModule
  ]
})
export class Page2Module { }
