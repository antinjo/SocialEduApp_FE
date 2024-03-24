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

  subjectName:string;
  subjectCreateDate:Date = new Date;
  getMainPersonOfSubject:string;

  @Select(FeatureState.getSubjectName) subjectName$:Observable<string>
  @Select(FeatureState.getCreateDateOfSubject) subjectCreateDate$:Observable<Date>
  @Select(FeatureState.getMainPersonOfSubject) getMainPersonOfSubject$:Observable<string>

  ngOnInit(): void {
      this.subjectName$.subscribe((res) =>{
        this.subjectName = res
      })
      this.subjectCreateDate$.subscribe((res)=>{
        this.subjectCreateDate = res
      })
      this.getMainPersonOfSubject$.subscribe((res)=>{
        this.getMainPersonOfSubject = res
      })
  }
}
