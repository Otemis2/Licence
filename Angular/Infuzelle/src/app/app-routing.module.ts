import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { CalendrierComponent } from './shared/component/calendrier/calendrier.component';
import { ReserverComponent } from './reserver/reserver.component';
import { AdminModule } from './admin/admin.module';
import { FormulaireComponent } from './shared/component/formulaire/formulaire.component';

const routes: Routes = [
{
  path : "admin",
  loadChildren: ()=> import('./admin/admin.module').then(m => AdminModule)
  //component: CreateContactComponent
},{
  path : "",
  component: AccueilComponent,
},{
  path : "menu",
  component: MenuComponent,
},{
  path : "contact",
  component: ContactComponent,
},{
  path : "actualite",
  component: ActualiteComponent,
},{
  path : "reserver",
  component : ReserverComponent,
},
{
  path : "test",
  component : FormulaireComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
  RouterModule,
  SharedModule
]
})
export class AppRoutingModule { }
