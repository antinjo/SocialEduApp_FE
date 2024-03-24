import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FeatureState } from '../../../store/feature.store';
import { Observable } from 'rxjs';
import { UserModel } from '../../../models/user.model';
import { GetSubmissionsFolder, GetUserInfo } from '../../../store/feature.action';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

constructor(private store: Store){}
//todo: change type when BE is ready
user:any;

@Select(FeatureState.getUserInfo) user$:Observable<UserModel>

ngOnInit(): void {
  this.store.dispatch(new GetUserInfo())
  this.store.dispatch(new GetSubmissionsFolder())
    this.user$.subscribe((res)=>{
      this.user = res
    })
}

}
