import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

  @Input() dataSource = [];
  @Input() displayedColumns = [];

  @Output() lineObject = new EventEmitter<any>();

  public showColumn: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.showColumn = this.displayedColumns.map(element => element['column']);
  }

  public getLine(object:any){
    this.lineObject.emit(object);
  }
}

