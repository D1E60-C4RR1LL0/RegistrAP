import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPswdPage } from './reset-pswd.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPswdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPswdPageRoutingModule {}
