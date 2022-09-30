import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './component/table/table.component';
import {MatTableModule} from '@angular/material/table';
import { PromiseService } from './service/promise.service';
import { ServiceService } from './service/service.service';
import { ModelContact } from './model/model-contact';
import { BoldPipe } from './bold.pipe';


@NgModule({
  declarations: [
    TableComponent,
    BoldPipe
  ],
  exports: [
    TableComponent,
    BoldPipe
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  providers:[
    ServiceService,
    PromiseService,
    ModelContact
  ]
  
})
export class SharedModule {}
