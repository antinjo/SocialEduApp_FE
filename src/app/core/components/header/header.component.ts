import {  Component, OnInit } from '@angular/core';
import { HomepageService } from '../../../feature/services/homepage.service';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { FeatureState } from '../../../feature/store/feature.store';
import { Observable } from 'rxjs';
import { GetUserInfo } from '../../../feature/store/feature.action';
import { UserModel } from '../../../feature/models/user.model';
import { CoreService } from '../../services/core.service';
import { Search } from '../../models/search.model';
import { SearchResult } from '../../models/searchResult.model';

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
  searchResultsVisible:boolean = false;
  user:UserModel
  searchText: string = "";
  search:Search ={
    SearchString : "",
    UserEmail:""
  };
  searchResults:SearchResult[];

  constructor(
    private homepageservices:HomepageService,
    private route:ActivatedRoute,
    private store:Store,
    private corepageservices:CoreService
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
            this.getUserInfo$.subscribe((res)=>{
              if(res.email===this.loggedInUser){
                this.loggedInUserModel = res
                this.user = res
              }else{
                this.user = res
              }

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

  onKeydown(event) {
    if (event.key === "Enter") {
      if(this.searchText != ""){
        this.search = {
          SearchString : this.searchText,
          UserEmail : this.loggedInUser
        }
        this.corepageservices.getSearchResults(this.search).subscribe((res)=>{
          if(res.length != 0){
            this.searchResults = res;
          }
          this.searchResultsVisible = !this.searchResultsVisible
        })
      }
    }
    if(event.key ==="Backspace"){
      this.searchResultsVisible = false;
    }
  }

  resultClicked(data:boolean){
    this.searchResultsVisible = data
  }
}
