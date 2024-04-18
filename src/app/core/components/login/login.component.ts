import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { AuthResponseData } from '../../models/authResponsData.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authService:AuthService,
    private router:Router
    ){}

  password:string ="";
  email:string ="";
  authObs: Observable<AuthResponseData>;
  error: string = null;

  onLogin(){
    this.authObs=this.authService.login(this.email,this.password)

    this.password = ""
    this.email =""

    
    this.authObs.subscribe(
      resData => {
        this.router.navigate(['/homepage']);
      },
      errorMessage => {
        this.error = errorMessage;
      })
  }

}
