import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'app-formulaire-contact',
  templateUrl: './formulaire-contact.component.html',
  styleUrls: ['./formulaire-contact.component.scss']
})
export class FormulaireContactComponent implements OnInit {

  constructor(public fb : FormBuilder) { }

  public registerForm: FormGroup = this.fb.group({
    sujet : ["",[Validators.required,Validators.minLength(3)]],
    message : ["",[Validators.required,Validators.minLength(10)]],
    //name : ["",[Validators.required,Validators.pattern('[a-z]')]]
  })

  ngOnInit(): void {
  }

  public submit()
  {
    console.log(this.registerForm.invalid);
    if (this.registerForm.invalid)
    {
      console.log("Erreur");
      console.log(this.registerForm.value);
      return;
    }
    else
    {
      console.log(this.registerForm.value);
      let donneForm = this.registerForm.value;
      window.open('mailto:otenefis@gmail.com?subject='+donneForm['sujet']+'&body='+donneForm['message']);
    }
    //console.log(this.registerForm.value);
  }

  //registerForm.get('sujet').hasError('minlength')


  /*
  public getErrorMessage()
  {
    let donneForm = this.registerForm.value;
    console.log(this.registerForm.value);
    console.log(donneForm["sujet"]);
    if(donneForm["sujet"]=="")
    {
      console.log("ErreurS1");
      this.erreur = true;
      return "Ce champ est vide.";
    }
    else
    {
      this.erreur = false;
    }

    if(donneForm["sujet"]!="")
    {
      console.log("ErreurS2");
      this.erreur = true;
      return "Veuillez saisir au moins 3 caratères.";
    }
    else
    {
      this.erreur = false;
    }


    if(donneForm["message"]=="")
    {
      console.log("ErreurM1");
      this.erreur = true;
      return "Ce champ est vide.";
    }
    else
    {
      this.erreur = false;
    }

    if(donneForm["message"]!="")
    {
      console.log("ErreurM2");
      this.erreur = true;
      return "Veuillez saisir au moins 10 caratères";
    }
    else
    {
      this.erreur = false;
    }
    return;
  }
*/
}
