import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { InstitutionsModel } from '../../../models/institution.model';
import { FeatureState } from '../../../store/feature.store';

@Component({
  selector: 'app-ski-tabs',
  templateUrl: './ski-tabs.component.html',
  styleUrl: './ski-tabs.component.scss'
})
export class SkiTabsComponent implements OnInit{

  institution:string;

  @Select(FeatureState.getInstitution) institution$:Observable<InstitutionsModel>
  @Select(FeatureState.isLoadedStudenti) isLoadedStudenti$:Observable<boolean>

  ngOnInit(): void {
      this.institution$.subscribe((res)=>{
        this.institution = res.name
      })
  }
}
