import { HttpResponseBase } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({

  email: new FormControl("",[Validators.email, Validators.required]),


  password: new FormControl("", [Validators.required , Validators.minLength(9)]),

  });

  constructor(
     private _router:Router ) {}
  
  
  showData(form:any){
    console.log(form.value);
    if (form.valid){
      this._router.navigate(['/movies'])
      
      
     

    }
    
      
    
    
  }

  

  

  ngOnInit(): void {
  }

}

      

        
      
    

    
  
    
    


      