import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreatepinrequestComponent } from './createpinrequest.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: CreatepinrequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatepinrequestRoutingModule {
}
