import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page3Component } from './page3.component';
import { Page3RoutingModule } from './page3-routing.module';



@NgModule({
  declarations: [
    Page3Component
  ],
  imports: [
    CommonModule,
    Page3RoutingModule
  ]
})
export class Page3Module { }
