import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneponentPageRoutingModule } from './oneponent-routing.module';

import { OneponentPage } from './oneponent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneponentPageRoutingModule
  ],
  declarations: [OneponentPage]
})
export class OneponentPageModule {}
