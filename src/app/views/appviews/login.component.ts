import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: 'login.template.html'
})
export class LoginComponent implements OnInit {
  constructor(private router:Router) { }
 public ngOnInit(){

  }
  loginUser(e){
  e.prventDefault();
  console.log(e);
  var username = e.target.element[0].value;
  var password = e.target.element[1].value;
   console.log(username, password);
   return false;
   }
}