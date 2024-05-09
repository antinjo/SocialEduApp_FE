import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetInstitution, GetInstitutions, GetSubjectForInstitution } from '../../store/feature.action';
import { Observable } from 'rxjs';
import { InstitutionsModel } from '../../models/institution.model';
import { FeatureState } from '../../store/feature.store';
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

  @Select(FeatureState.getInstitution) institution$:Observable<InstitutionsModel>
  @Select(FeatureState.getInstitutions) institutions$:Observable<InstitutionsModel[]>

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.store.dispatch(new GetInstitutions()).subscribe(()=>{
        this.institutions$.subscribe((res)=>{
          this.id = res.find(item => item.abbreviation===params['institutionAbbr'])?.id
        })
        this.store.dispatch(new GetInstitution(this.id))
        this.store.dispatch(new GetSubjectForInstitution(this.id));
      });
    });
  }
}
