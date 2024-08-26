import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneponentPage } from './oneponent.page';

const routes: Routes = [
  {
    path: '',
    component: OneponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneponentPageRoutingModule {}
