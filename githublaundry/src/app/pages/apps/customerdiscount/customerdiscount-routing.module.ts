import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { CustomerDiscountComponent } from './customerdiscount.component';


const routes: VexRoutes = [
  {
    path: '',
    component: CustomerDiscountComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDiscountRoutingModule {
}
