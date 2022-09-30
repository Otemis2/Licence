import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { UrlHandlingStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = { withCredentials: true, header: new HttpHeaders({'Content-type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  get(url: string,option?:{}): Observable<any>{
    return this.http.get(environment.env_url + url,{...httpOptions ,... option});
  }
}