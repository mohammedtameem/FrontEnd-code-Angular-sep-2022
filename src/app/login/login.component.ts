import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string = 'Ramesh';
  password:string = 'loging123';
  errorMessage:string = 'Invalid Credentials';
  isValid:boolean = false;

  constructor(private router:Router
    )
    { }

  ngOnInit(): void {

    console.log("This method is called automatically");
  }

  handleLogin()
  {
    if(this.userName === "Ramesh" && this.password === "login123")
    {
      this.router.navigate(['welcome']);
      this.isValid = false;
    }
    else{
      console.log("login unsuccessful");
      this.isValid = true;

    }

  }

}
