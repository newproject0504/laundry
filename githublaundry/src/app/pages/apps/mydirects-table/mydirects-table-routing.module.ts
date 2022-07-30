import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { MydirectsTableComponent } from './mydirects-table.component';


const routes: VexRoutes = [
  {
    path: '',
    component: MydirectsTableComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MydirectsTableRoutingModule {
}
