import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetInstitutions, GetSubjectForInstitution } from '../../store/feature.action';

@Component({
  selector: 'app-faks-page',
  templateUrl: './faks-page.component.html',
  styleUrl: './faks-page.component.scss'
})
export class FaksPageComponent implements OnInit{

  constructor(private store: Store){}

  ngOnInit(): void {
    // this.store.dispatch(new GetInstitutions());
    // this.store.dispatch(new GetSubjectForInstitution());
      
  }
}
