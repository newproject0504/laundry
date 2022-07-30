import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { WallettransactionTableComponent } from './wallettransaction-table.component';


const routes: VexRoutes = [
  {
    path: '',
    component: WallettransactionTableComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WallettransactionTableRoutingModule {
}
