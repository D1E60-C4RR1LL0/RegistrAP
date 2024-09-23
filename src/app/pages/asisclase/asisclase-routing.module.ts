import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsisclasePage } from './asisclase.page';

const routes: Routes = [
  {
    path: '',
    component: AsisclasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsisclasePageRoutingModule {}
