import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';






@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  registrationForm = new FormGroup({
    First_name: new FormControl("" , [Validators.required , Validators.minLength(3), Validators.maxLength(10)]),


    Last_name: new FormControl("",[Validators.required , Validators.minLength(3), Validators.maxLength(16)]),

    email: new FormControl("",[Validators.email, Validators.required]),


    password: new FormControl("", [Validators.required , Validators.minLength(9)]),


    age: new FormControl("",[Validators.min(15) , Validators.required]),
 
    
  });

  constructor(  private _router:Router){}


  showData(form:any){
    this._router.navigate(['/login'])
    console.log(form.value);
    if (form.valid){
      
      
    

    }
    
      
    
    
  }

  

  

  ngOnInit(): void {
  }

}
