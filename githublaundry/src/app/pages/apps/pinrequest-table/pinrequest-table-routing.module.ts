import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { PinrequestTableComponent } from './pinrequest-table.component';


const routes: VexRoutes = [
  {
    path: '',
    component: PinrequestTableComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinrequestTableRoutingModule {
}
