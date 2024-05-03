import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../services/homepage.service';
import { Select, Store } from '@ngxs/store';
import { GetPosts, GetSavedUsersInfo  } from '../../store/feature.action';
import { ActivatedRoute } from '@angular/router';
import { FeatureState } from '../../store/feature.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

  show:boolean =false;

  constructor(
    private homepageservice: HomepageService,
    private store:Store,
    private route:ActivatedRoute
    ){}

    @Select(FeatureState.isLoadedHomePage) isLoadedHomePage$:Observable<boolean>

  ngOnInit(): void {
    this.route.queryParams
    .subscribe((params)=>{
      this.store.dispatch(new GetPosts(params['userName']))
    })
    //TODO maknuti ovo jer bi trebalo biti vec u paramsima od logina + dodati GetUserInfo
      // this.store.dispatch(new GetSavedUsersInfo())
      //this.store.dispatch(new GetSubjectForUser())
      
      this.homepageservice.toggleEvent.subscribe((toggle:boolean) =>{
        this.show = !toggle
      })
  }
}
