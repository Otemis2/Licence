import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';



@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor(private httpService : ServiceService) { }

  public getList()
  {
    return new Promise((resolve, reject) =>{
      this.httpService.get('posts').subscribe(
      response =>{
        if(response){
          resolve(response)
        }else
        {
          reject()
        }
      }
      )
    })
  }
}
