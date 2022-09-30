import { Component, OnInit } from '@angular/core';
import { ModelContact } from 'src/app/shared/model/model-contact';
import { PromiseService } from 'src/app/shared/service/promise.service';

@Component({
  selector: 'app-list-contact2',
  templateUrl: './list-contact2.component.html',
  styleUrls: ['./list-contact2.component.scss']
})
export class ListContactComponent2 implements OnInit {

  constructor(public promise : PromiseService,public modelContact : ModelContact) { }

  public dataSource : any = [];
  public displayedColumns : any = [];

  public loading: boolean =true;

  ngOnInit(): void {
    this.displayedColumns = this.modelContact.getContactModel()['listContact2'];

    let localContact = localStorage.getItem("listeContact");
    if (localContact) {
      this.dataSource = JSON.parse(localContact);
      console.log(this.dataSource);
    }
    this.loading =false;
  }
  public getLine(object : any)
  {
    console.log(object);
  }
}

