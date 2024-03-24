import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FeatureState } from '../../../store/feature.store';
import { Observable } from 'rxjs';
import { UserModel } from '../../../models/user.model';
import { InstitutionsModel } from '../../../models/institution.model';
import { SubjectModel } from '../../../models/subject.model';
import { SavedUserModel } from '../../../models/savedUsers.model';

@Component({
  selector: 'app-for-you-page-block',
  templateUrl: './for-you-page-block.component.html',
  styleUrl: './for-you-page-block.component.scss'
})
export class ForYouPageBlockComponent implements OnInit{

  institutions: InstitutionsModel[];
  subjects: SubjectModel[];
  users: UserModel[];


  @Select(FeatureState.getUserInfo) user$:Observable<UserModel>
  @Select(FeatureState.getSavedUsers) savedUsersFolders$:Observable<SavedUserModel>
  @Select(FeatureState.getSubjectForUser) userSubjects$:Observable<SubjectModel[]>

  constructor(private store:Store){}

  ngOnInit(): void {
    this.user$.subscribe((res) =>{
      this.institutions = res.institutions;
    })
    this.savedUsersFolders$.subscribe((res) =>{
      this.users = res.users;
    })
    this.userSubjects$.subscribe((res)=>{
      this.subjects = res
    })
  }

}
