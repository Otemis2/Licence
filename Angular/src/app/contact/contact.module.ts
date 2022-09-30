import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule}from './contact-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { SharedModule } from '../shared/shared.module';
import { ListContactComponent } from './list-contact/list-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ListContactComponent2 } from './list-contact2/list-contact2.component';
import { PrintContactComponent } from './print-contact/print-contact.component';



@NgModule({
  declarations: [
    CreateContactComponent,
    ListContactComponent,
    ListContactComponent2,
    PrintContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ContactModule { }
