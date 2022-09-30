import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactModule } from './contact/contact.module';
import { CreateContactComponent } from './contact/create-contact/create-contact.component';

const routes: Routes = [{
  path : "contact",
  loadChildren: ()=> import('./contact/contact.module').then(m => ContactModule)
  //component: CreateContactComponent
},{
  path : "",
  component: AcceuilComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
