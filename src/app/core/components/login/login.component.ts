import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { AuthResponseData } from '../../models/authResponsData.model';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { LoginUserName, isloggedIn } from '../../../feature/store/feature.action';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertComponent } from '../alert/alert.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [DialogService,MessageService]
})
export class LoginComponent implements OnInit{

  constructor(
    private authService:AuthService,
    private router:Router,
    private dialogService: DialogService,
    private store: Store
    ){}

  password:string ="";
  email:string ="";
  passwordR:string ="";
  emailR:string ="";
  authObs: Observable<AuthResponseData>;
  authObsR: Observable<AuthResponseData>;
  error: string = null;
  loggedIn:boolean = false
  ref: DynamicDialogRef | undefined;

  ngOnInit(): void {
    this.store.dispatch(new isloggedIn(false))
  }
  onLogin(){
    this.authObs=this.authService.login(this.email,this.password)
    this.authObs.subscribe(
      res=>{
        this.router.navigate(['/homepage'],{queryParams: {userName: this.email}});
        this.store.dispatch(new isloggedIn(true))
        this.store.dispatch(new LoginUserName(this.email))
        this.password = ""
        this.email =""
      },
      errorMessage=>{
        this.error = errorMessage;
        this.show("Username/Password nije točan! Pazi na velika/mala slova!")
        this.password = ""
        this.email =""
      }
    )
  }
  onRegister(){
    this.authObsR=this.authService.register(this.emailR,this.passwordR)
    this.authObsR.subscribe(
      res=>{
        this.router.navigate(['/homepage'],{queryParams: {userName: this.email}});
        this.store.dispatch(new isloggedIn(true))
        this.store.dispatch(new LoginUserName(this.email))
        this.password = ""
        this.email =""
      },
      errorMessage=>{
        this.error = errorMessage;
        this.show(this.error)
        this.password = ""
        this.email =""
      }
    )
  }

  show(message:string) {
    this.ref = this.dialogService.open(AlertComponent, {
        data:{
          message:message
        },
        header: 'Error',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
    });

  }
}
