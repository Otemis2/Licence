import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalOutService {

  constructor() { }

  public insertData(data : any, nameList : string )
  {
    let localMenu = localStorage.getItem(nameList);
    let local = data;
    
    //console.log(typeof(local));
    //console.log(typeof(data));
    console.log(data);
    if(localMenu)
    {
      let listMenu = JSON.parse(localMenu);
      if(Array.isArray(listMenu))
      {
        local["id"]=listMenu.length;
        listMenu.push(data);
        localStorage.setItem(nameList, JSON.stringify(listMenu));
      }
    }
    else
    {
      local["id"]=0;
      localStorage.setItem(nameList,JSON.stringify([data]));
    }
  }

}
