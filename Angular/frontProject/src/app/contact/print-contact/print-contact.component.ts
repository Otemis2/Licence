import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-print-contact',
  templateUrl: './print-contact.component.html',
  styleUrls: ['./print-contact.component.scss']
})
export class PrintContactComponent implements OnInit {

  constructor(private varRouter : ActivatedRoute) { }
  public contact = [];
  public loading: boolean =true;

  ngOnInit(): void {

    let local = localStorage.getItem("listeContact");
    if(local)
    {
      let varlocal = JSON.parse(local);
      this.contact = varlocal.filter((element:any) => element.id == this.varRouter.snapshot.paramMap.get("idRef"));
      console.log(this.contact);

      this.loading = false;
    }
    console.log(this.varRouter.snapshot.paramMap.get("idRef"));
    
    
  }

}
