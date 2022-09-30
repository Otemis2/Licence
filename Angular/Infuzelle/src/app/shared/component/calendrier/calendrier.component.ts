import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { LocalOutService } from '../../service/local-out.service';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss','../formulaire-contact/formulaire-contact.component.scss'],
})
export class CalendrierComponent implements OnInit {

  constructor(private _adapter: DateAdapter<any>,public fb : FormBuilder,public localOut : LocalOutService) {
    this._adapter.setLocale('fr');
   }

  public registerForm: FormGroup = this.fb.group({
    date : ["",[Validators.required]]
  })
  
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0;
  };

  ngOnInit(): void {
  }

  public submit()
  {
    if (this.registerForm.invalid)
    {
      console.log("Erreur");
      console.log(this.registerForm.value);
      return;
    }
    else
    {
      console.log(this.registerForm.value);

      this.localOut.insertData(this.registerForm.value,"listeReservation"); 
      // let localReservation = localStorage.getItem("listeReservation");
      // let local = this.registerForm.value;
      // if(localReservation){

      //   let listReservation = JSON.parse(localReservation);
      //   if(Array.isArray(listReservation))
      //   {
      //     local["id"]=listReservation.length;
      //     listReservation.push(this.registerForm.value);
      //     localStorage.setItem("listeReservation", JSON.stringify(listReservation));
      //   }
      // }
      // else
      // {
      //   local["id"]=0;
      //   localStorage.setItem("listeReservation",JSON.stringify([this.registerForm.value]));
        
      // }
    }
    //console.log(this.registerForm.value);
  }

}
