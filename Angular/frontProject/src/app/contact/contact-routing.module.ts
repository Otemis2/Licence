import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintContactComponent } from './print-contact/print-contact.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ListContactComponent2 } from './list-contact2/list-contact2.component';

const routes: Routes = [{
  path : "create",
  component: CreateContactComponent
},{
  path: "list-contact",
  component: ListContactComponent,
},{
  path: "contact2",
  component: ListContactComponent2,
},{
  path: "printC/:idRef",
  component: PrintContactComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }