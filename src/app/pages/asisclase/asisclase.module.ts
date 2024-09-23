import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsisclasePageRoutingModule } from './asisclase-routing.module';

import { AsisclasePage } from './asisclase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsisclasePageRoutingModule
  ],
  declarations: [AsisclasePage]
})
export class AsisclasePageModule {}
