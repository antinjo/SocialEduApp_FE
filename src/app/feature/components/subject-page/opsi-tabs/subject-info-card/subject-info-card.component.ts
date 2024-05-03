import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { FeatureState } from '../../../../store/feature.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subject-info-card',
  templateUrl: './subject-info-card.component.html',
  styleUrl: './subject-info-card.component.scss'
})
export class SubjectInfoCardComponent implements OnInit{

  subjectDescription:string;
  subjectCreateDate:Date = new Date;
  getMainPersonOfSubject:string;

  @Select(FeatureState.getSubjectDescription) subjectDescription$:Observable<string>
  @Select(FeatureState.getCreateDateOfSubject) subjectCreateDate$:Observable<Date>
  @Select(FeatureState.getMainPersonOfSubject) getMainPersonOfSubject$:Observable<string>

  ngOnInit(): void {
      this.subjectDescription$.subscribe((res) =>{
        this.subjectDescription = res
      })
      this.subjectCreateDate$.subscribe((res)=>{
        this.subjectCreateDate = res
      })
      this.getMainPersonOfSubject$.subscribe((res)=>{
        this.getMainPersonOfSubject = res
      })
  }
}
