import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetSubjectInfo, GetSubmissionsFolder } from '../../store/feature.action';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrl: './subject-page.component.scss'
})
export class SubjectPageComponent implements OnInit {

  constructor(private store:Store){}

  ngOnInit(): void {
      // this.store.dispatch(new GetSubjectInfo())
      // this.store.dispatch(new GetSubmissionsFolder())

  }
}
