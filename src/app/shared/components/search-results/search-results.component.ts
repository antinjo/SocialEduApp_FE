import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from '../../../core/models/searchResult.model';
import { Select, Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SubjectModel } from '../../../feature/models/subject.model';
import { UserModel } from '../../../feature/models/user.model';
import { GetUserInfo, GetSubjectForUser } from '../../../feature/store/feature.action';
import { FeatureState } from '../../../feature/store/feature.store';
import { InstitutionsModel } from '../../../feature/models/institution.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent implements OnInit{

  @Input() searchResultList:SearchResult[];

  @Select(FeatureState.getUserInfo) user$:Observable<UserModel>
  @Select(FeatureState.getSavedUsers) savedUsersFolders$:Observable<UserModel[]>
  @Select(FeatureState.getSubjectForUser) userSubjects$:Observable<SubjectModel[]>
  @Select(FeatureState.getUserId) getUserId$:Observable<string>

  institutions: InstitutionsModel[];
  subjects: SubjectModel[];
  users: UserModel[];
  userEmail:string;

  constructor( 
    private store:Store,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
      console.warn(this.searchResultList);

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
