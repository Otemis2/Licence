import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { LocalOutService } from '../../service/local-out.service';

@Component({
  selector: 'app-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.scss','../formulaire-contact/formulaire-contact.component.scss']
})
export class FormMenuComponent implements OnInit {

  constructor(public fb : FormBuilder,public localOut : LocalOutService) { }

  public registerForm: FormGroup = this.fb.group({
    nMenu : ["",[Validators.required]],
    entree : ["",[Validators.required]],
    Plat : ["",[Validators.required]],
    desserts : ["",[Validators.required]],
  })

  ngOnInit(): void {
  }

  public generer()
  {
    if(this.registerForm.valid)
    {
        this.localOut.insertData(this.registerForm.value,"listeMenu");
      // console.log(this.registerForm.value);

      // let localMenu = localStorage.getItem("listeMenu");
      // let local = this.registerForm.value;
      // if(localMenu){

      //   let listMenu = JSON.parse(localMenu);
      //   if(Array.isArray(listMenu))
      //   {
      //     local["id"]=listMenu.length;
      //     listMenu.push(this.registerForm.value);
      //     localStorage.setItem("listeMenu", JSON.stringify(listMenu));
      //   }
      // }
      // else
      // {
      //   local["id"]=0;
      //   localStorage.setItem("listeMenu",JSON.stringify([this.registerForm.value]));
        
      // }

    }

  }

}
