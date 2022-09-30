import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-depliant',
  templateUrl: './menu-depliant.component.html',
  styleUrls: ['./menu-depliant.component.scss']
})
export class MenuDepliantComponent implements OnInit {

  constructor() { }
  
  panelOpenState = false;

  ngOnInit(): void {
  }

}
