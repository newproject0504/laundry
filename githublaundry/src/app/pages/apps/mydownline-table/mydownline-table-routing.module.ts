import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { MydownlineTableComponent } from './mydownline-table.component';


const routes: VexRoutes = [
  {
    path: '',
    component: MydownlineTableComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MydownlineTableRoutingModule {
}
