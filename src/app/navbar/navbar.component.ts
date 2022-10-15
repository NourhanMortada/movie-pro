import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  islogin:any =null;
  userName:any;
  
 

  constructor(private _router:Router) { }

  logout(){
    localStorage.removeItem('token');
   
    this._router.navigate(['/login']);
  }

  ngOnInit(): void {
    
    
 
  }

}
