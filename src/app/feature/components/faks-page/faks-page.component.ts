import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetInstitution, GetSubjectForInstitution } from '../../store/feature.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faks-page',
  templateUrl: './faks-page.component.html',
  styleUrl: './faks-page.component.scss'
})
export class FaksPageComponent implements OnInit{

  constructor(
    private store: Store,
    private route:ActivatedRoute
    ){}

  id:string

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
        this.id = params['institutionID']
        this.store.dispatch(new GetInstitution(this.id))
        this.store.dispatch(new GetSubjectForInstitution(this.id));
    });
  };
}
