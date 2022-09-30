import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitrePipe } from './pipe/titre.pipe';
import { TextPipe } from './pipe/text.pipe';
import { CoordonneePipe } from './pipe/coordonnee.pipe';
import { CarouselComponent } from './component/carousel/carousel.component';
import { FormulaireContactComponent } from './component/formulaire-contact/formulaire-contact.component';
import { MenuDepliantComponent } from './component/menu-depliant/menu-depliant.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CarouselModule } from '@coreui/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CalendrierComponent } from './component/calendrier/calendrier.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TabsAdminComponent } from './component/tabs-admin/tabs-admin.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TableReservationComponent } from './component/table-reservation/table-reservation.component';
import {MatTableModule} from '@angular/material/table';
import { TableauComponent } from './component/tableau/tableau.component';
import { ModelReservation } from './model/model-reservation';
import { FormMenuComponent } from './component/form-menu/form-menu.component';
import { TourDuMondeComponent } from './component/tour-du-monde/tour-du-monde.component';
import { Url } from './model/url';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { ModelForm } from './model/model-form';


@NgModule({
  declarations: [
    TitrePipe,
    TextPipe,
    CoordonneePipe,
    CarouselComponent,
    FormulaireContactComponent,
    MenuDepliantComponent,
    CalendrierComponent,
    TabsAdminComponent,
    TableReservationComponent,
    TableauComponent,
    FormMenuComponent,
    TourDuMondeComponent,
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule
  ],exports :[
    TitrePipe,
    TextPipe,
    CoordonneePipe,
    CarouselComponent,
    FormulaireContactComponent,
    MenuDepliantComponent,
    CalendrierComponent,
    TabsAdminComponent,
    TableauComponent,
    FormMenuComponent,
    TourDuMondeComponent,
    FormulaireComponent
  ],
  providers:[
    ModelReservation,
    Url,
    ModelForm
  ]
})
export class SharedModule { }
