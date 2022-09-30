import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {

  constructor(public fb : FormBuilder) { }

  public registerForm: FormGroup = this.fb.group({
    nom : ["",Validators.required],
    prenom : [""],
    adresse : [""],
    email : ["",Validators.email],
    tel : [""]
  })

  ngOnInit(): void {
  }

  public submit()
  {
    if (this.registerForm.invalid){
      console.log(this.registerForm.value);
      return;
    }
    else
    {
      let localContact = localStorage.getItem("listeContact");
      let local = this.registerForm.value;
      if(localContact){

        let listContact = JSON.parse(localContact);
        if(Array.isArray(listContact))
        {
          local["id"]=listContact.length;
          listContact.push(this.registerForm.value);
          localStorage.setItem("listeContact", JSON.stringify(listContact));

        }
      }
      else
      {
        local["id"]=0;
        localStorage.setItem("listeContact",JSON.stringify([this.registerForm.value]));
        
      }
      console.log(this.registerForm.value);
    }
    //console.log(this.registerForm.value);
  }


}
