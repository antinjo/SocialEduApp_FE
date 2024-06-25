import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchResult } from '../../../core/models/searchResult.model';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SubjectModel } from '../../../feature/models/subject.model';
import { UserModel } from '../../../feature/models/user.model';
import { FeatureState } from '../../../feature/store/feature.store';
import { InstitutionsModel } from '../../../feature/models/institution.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent{

  @Input() searchResultList:SearchResult[];
  @Output() searchResultClicked = new EventEmitter<boolean>();

  @Select(FeatureState.getUserInfo) user$:Observable<UserModel>
  @Select(FeatureState.getSavedUsers) savedUsersFolders$:Observable<UserModel[]>
  @Select(FeatureState.getSubjectForUser) userSubjects$:Observable<SubjectModel[]>
  @Select(FeatureState.getUserId) getUserId$:Observable<string>

  institutions: InstitutionsModel[];
  subjects: SubjectModel[];
  users: UserModel[];
  userEmail:string;

  resultClicked(){
    const data = false
    this.searchResultClicked.emit(data);
  }


}
