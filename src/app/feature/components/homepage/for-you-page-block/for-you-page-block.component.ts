import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FeatureState } from '../../../store/feature.store';
import { Observable } from 'rxjs';
import { UserModel } from '../../../models/user.model';
import { InstitutionsModel } from '../../../models/institution.model';
import { SubjectModel } from '../../../models/subject.model';
import { ActivatedRoute } from '@angular/router';
import { GetSubjectForUser, GetUserInfo } from '../../../store/feature.action';

@Component({
  selector: 'app-for-you-page-block',
  templateUrl: './for-you-page-block.component.html',
  styleUrl: './for-you-page-block.component.scss'
})
export class ForYouPageBlockComponent implements OnInit{

  institutions: InstitutionsModel[];
  subjects: SubjectModel[];
  users: UserModel[];
  userEmail:string;

  @Select(FeatureState.getUserInfo) user$:Observable<UserModel>
  @Select(FeatureState.getSavedUsers) savedUsersFolders$:Observable<UserModel[]>
  @Select(FeatureState.getSubjectForUser) userSubjects$:Observable<SubjectModel[]>
  @Select(FeatureState.getUserId) getUserId$:Observable<string>

  constructor(
    private store:Store,
    private route:ActivatedRoute
    ){}

  ngOnInit(): void {    
    this.route.queryParams
    .subscribe(params => {
      this.store.dispatch(new GetUserInfo(params['userName'])).subscribe(()=>{
        this.user$.subscribe((res) =>{
          this.userEmail=res.email
          this.institutions = res.institutions;
        })
        this.savedUsersFolders$.subscribe((res) =>{
          this.users = res;
        })
        this.store.dispatch(new GetSubjectForUser(params['userName'])).subscribe(()=>{
          this.userSubjects$.subscribe((res)=>{
            this.subjects = res
          })
        })
      })
    });
  }
}
