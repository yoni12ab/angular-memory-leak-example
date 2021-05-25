import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page4Component } from './page4.component';

const routes: Routes = [{ path: '', component: Page4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page4RoutingModule {}
