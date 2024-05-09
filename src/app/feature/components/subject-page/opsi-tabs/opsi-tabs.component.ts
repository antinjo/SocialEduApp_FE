import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FeatureState } from '../../../store/feature.store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-opsi-tabs',
  templateUrl: './opsi-tabs.component.html',
  styleUrl: './opsi-tabs.component.scss'
})
export class OpsiTabsComponent implements OnInit{

  subjectName:string =""

  constructor(private store:Store){}

  @Select(FeatureState.getSubjectName) subjectName$:Observable<string>
  @Select(FeatureState.isLoadedSudionici) isLoadedSudionici$:Observable<boolean>

  ngOnInit(): void {
      this.subjectName$.subscribe((res) =>{
        if(this.subjectName === res){
          this.subjectName = res
        }
      })
  }
}
