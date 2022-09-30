import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Url } from '../../model/url';

@Component({
  selector: 'app-tour-du-monde',
  templateUrl: './tour-du-monde.component.html',
  styleUrls: ['./tour-du-monde.component.scss','../formulaire-contact/formulaire-contact.component.scss']
})
export class TourDuMondeComponent implements OnInit {

  constructor(public fb : FormBuilder,public monUrl : Url) { }

  public registerForm: FormGroup = this.fb.group({
  })

  ngOnInit(): void {
  }
  

  i =0;
  url = this.monUrl.getUrl()['url'];
  public tourDuMonde()
  {
    let tdm : Window | null;
    tdm = window.open(this.url[this.i],"nom_de_la_fenetre","menubar=no, status=no, width=100px");

    if(this.i == this.url.length)
    {
      return;
    }
    else
    {
      this.i = this.i+1;
    }
    
  }

}
