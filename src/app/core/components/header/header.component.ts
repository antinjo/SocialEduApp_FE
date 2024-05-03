import {  Component, OnInit } from '@angular/core';
import { HomepageService } from '../../../feature/services/homepage.service';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { FeatureState } from '../../../feature/store/feature.store';
import { Observable } from 'rxjs';
import { GetUserInfo } from '../../../feature/store/feature.action';
import { UserModel } from '../../../feature/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit{

  toggle:boolean;
  email:string;
  isloggedIn:boolean = false
  loggedInUser:string
  loggedInUserModel:UserModel
  visible: boolean = false;
  user:UserModel
  constructor(
    private homepageservices:HomepageService,
    private route:ActivatedRoute,
    private store:Store
    ){}

    @Select(FeatureState.getIsLoggedIn) isLoggedIn$:Observable<boolean>
    @Select(FeatureState.getUserInfo) getUserInfo$:Observable<UserModel>
    @Select(FeatureState.getUserId) getUserId$:Observable<string>

    ngOnInit(): void {
      this.isLoggedIn$.subscribe((res)=>{
        this.isloggedIn = res
      })
      this.getUserId$.subscribe((res)=>{
        this.loggedInUser=res
      })
      this.route.queryParams
      .subscribe(params => {
        if(!(this.loggedInUser)){
          this.loggedInUser = params['userName']
        }
          this.store.dispatch(new GetUserInfo(params['userName'])).subscribe(()=>{
            this.getUserInfo$.subscribe((res)=>{
              if(res.email===this.loggedInUser){
                this.loggedInUserModel = res
                this.user = res
              }else{
                this.user = res
              }

            })
          })
      }
    );
      this.toggle= false
    }

    showDialog() {
        this.visible = true;
    }

  onToggle(){
    this.homepageservices.toggleClicked(this.toggle)
    this.toggle = !this.toggle
  }

}
