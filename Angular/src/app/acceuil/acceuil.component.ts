import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  public navigation(url : string)
  {
    this.router.navigate([url]);
  }

}
