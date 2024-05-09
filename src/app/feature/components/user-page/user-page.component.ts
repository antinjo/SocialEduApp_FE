import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetSavedFoldersByUser } from '../../store/feature.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent implements OnInit{

  constructor(private store:Store,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.store.dispatch(new GetSavedFoldersByUser(params['userName'])).subscribe(()=>{
      })
    });
  } 
}
