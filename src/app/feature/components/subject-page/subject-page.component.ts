import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetSubjectInfo, GetSubjectList} from '../../store/feature.action';
import { ActivatedRoute } from '@angular/router';
import { FeatureState } from '../../store/feature.store';
import { Observable } from 'rxjs';
import { SubjectModel } from '../../models/subject.model';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrl: './subject-page.component.scss'
})
export class SubjectPageComponent implements OnInit {

  id:string;

  @Select(FeatureState.getSubjectList) subjectList$:Observable<SubjectModel[]>

  constructor(
    private store:Store,
    private route:ActivatedRoute
    ){}
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.store.dispatch(new GetSubjectList()).subscribe(()=>{
            this.subjectList$.subscribe((res)=>{
            this.id = res.find(item => item.abbreviation === params['subjectAbbr'])?.id
        })
        this.store.dispatch(new GetSubjectInfo(this.id))
      })
    });
  }
}
