import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPswdPageRoutingModule } from './reset-pswd-routing.module';

import { ResetPswdPage } from './reset-pswd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ResetPswdPageRoutingModule
  ],
  declarations: [ResetPswdPage]
})
export class ResetPswdPageModule {}
