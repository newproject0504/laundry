import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KycComponent } from './kyc.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: KycComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KycRoutingModule {
}
