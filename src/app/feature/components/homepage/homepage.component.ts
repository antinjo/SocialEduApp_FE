import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../services/homepage.service';
import { Store } from '@ngxs/store';
import { GetSavedUsersInfo, GetSubjectForUser, GetUserInfo } from '../../store/feature.action';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

  constructor(
    private homepageservice: HomepageService,
    private store:Store
    ){}

  ngOnInit(): void {
      this.store.dispatch(new GetUserInfo())
      this.store.dispatch(new GetSavedUsersInfo())
      this.store.dispatch(new GetSubjectForUser())
  }
}
