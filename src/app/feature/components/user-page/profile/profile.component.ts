import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FeatureState } from '../../../store/feature.store';
import { Observable } from 'rxjs';
import { UserModel } from '../../../models/user.model';
import { GetSubmissionsFolder, GetUserInfo } from '../../../store/feature.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

constructor(
  private store: Store,
  private route:ActivatedRoute
  ){}
  user:UserModel;

@Select(FeatureState.getUserInfo) user$:Observable<UserModel>
@Select(FeatureState.isLoadedUserPage) isLoadedUserPage$:Observable<UserModel>


ngOnInit(): void {
  this.route.queryParams
  .subscribe(params => {
    this.store.dispatch(new GetUserInfo(params['userName'])).subscribe(()=>{
      this.store.dispatch(new GetSubmissionsFolder(params['userName']))
      this.user$.subscribe((res)=>{
        this.user = res
      })
    })
  });
}
}
