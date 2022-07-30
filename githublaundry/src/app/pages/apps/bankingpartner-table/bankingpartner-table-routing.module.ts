import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { BankingpartnerTableComponent } from './bankingpartner-table.component';


const routes: VexRoutes = [
  {
    path: '',
    component: BankingpartnerTableComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingpartnerTableRoutingModule {
}
