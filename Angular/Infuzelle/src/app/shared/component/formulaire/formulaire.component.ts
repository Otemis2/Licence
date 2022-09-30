import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelForm } from '../../model/model-form';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  constructor(public modelForm : ModelForm,public fb : FormBuilder) {
   }


  public registerForm: FormGroup = this.fb.group({
    nMenu : ["",[Validators.required]],
    entree : ["",[Validators.required]],
    Plat : ["",[Validators.required]],
    desserts : ["",[Validators.required]],
    sujet : ["",[Validators.required]],
    message : ["",[Validators.required,Validators.minLength(10)]],
  })

  public formContact = this.modelForm.getForm()['formContact'];

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      nMenu : ["",[Validators.required]],
      entree : ["",[Validators.required]],
      Plat : ["",[Validators.required]],
      desserts : ["",[Validators.required]],
      sujet : ["",[Validators.required,Validators.minLength(3)]],
      message : ["",[Validators.required,Validators.minLength(10)]],
    })
  }

}
