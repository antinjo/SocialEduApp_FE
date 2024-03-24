import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { FeatureState } from '../../../store/feature.store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-opsi-tabs',
  templateUrl: './opsi-tabs.component.html',
  styleUrl: './opsi-tabs.component.scss'
})
export class OpsiTabsComponent implements OnInit{

  subjectName:string =""

  constructor(){}

  @Select(FeatureState.getSubjectName) subjectName$:Observable<string>


  ngOnInit(): void {
      this.subjectName$.subscribe((res) =>{
        this.subjectName =res
      })
  }
}
