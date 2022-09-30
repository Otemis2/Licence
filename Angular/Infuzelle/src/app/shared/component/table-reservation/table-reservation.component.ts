import { Component, OnInit } from '@angular/core';
import { ModelReservation } from '../../model/model-reservation';

@Component({
  selector: 'app-table-reservation',
  templateUrl: './table-reservation.component.html',
  styleUrls: ['./table-reservation.component.scss']
})
export class TableReservationComponent implements OnInit {

  constructor(public modelReservation : ModelReservation) { }

  public dataSource : any = [];
  public displayedColumns : any = [];

  public loading: boolean =true;

  ngOnInit(): void {
    this.displayedColumns = this.modelReservation.getReservationModel()['listReservation'];

    let localContact = localStorage.getItem("listeReservation");
    if (localContact) {
      this.dataSource = JSON.parse(localContact);
      console.log(this.dataSource);
    }
    this.loading = false;
  }

  public getLine(object : any)
  {
    console.log(object);
  }

}
