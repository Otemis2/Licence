import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './accueil/admin.component';
import { SharedModule } from '../shared/shared.module';
import { TourDuMondeComponent } from '../shared/component/tour-du-monde/tour-du-monde.component';


const routes: Routes = [{
  path : "",
  component: AdminComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
  RouterModule,
  SharedModule]
})

export class AdminRoutingModule { }
