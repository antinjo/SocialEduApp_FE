import { Component, OnInit  } from '@angular/core';
import { Select } from '@ngxs/store';
import { FeatureState } from '../../../../feature/store/feature.store';
import { Observable } from 'rxjs';
import { UserModel } from '../../../../feature/models/user.model';
import { InstitutionsModel } from '../../../../feature/models/institution.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit{

  opcenitoLoaded:boolean;
  obrazovanjeLoaded:boolean;
  interesiLoaded:boolean;
  radnoIskustvoLoaded:boolean;
  institucijeLoaded:boolean;
  user:UserModel;
  education:[];
  experience:[];
  interests:[];
  institutions:InstitutionsModel[];
  userInfo:any[];
  location:string;
  gender:string;
  dateOfBirth:Date;
  joinedDate:Date;

  @Select(FeatureState.getUserInfo) user$:Observable<UserModel>

  ngOnInit(): void {
      this.opcenitoLoaded = true;
      this.obrazovanjeLoaded = false;
      this.interesiLoaded = false;
      this.radnoIskustvoLoaded = false;
      this.institucijeLoaded = false;
      this.user$.subscribe((res) => {
        this.user = res
        this.education = res.education
        this.experience = res.experience
        this.interests = res.interests
        this.location = res.location
        this.gender = res.gender
        this.dateOfBirth = res.dateOfBirth
        this.joinedDate = res.joinedDate
        this.institutions = res.institutions
      })
  }
  openTab(tab:string){
    if(tab==="OP"){
      this.opcenitoLoaded = true;
      this.obrazovanjeLoaded = false;
      this.interesiLoaded = false;
      this.radnoIskustvoLoaded = false;
      this.institucijeLoaded = false;
    }else if(tab==="OB"){
      this.opcenitoLoaded = false;
      this.obrazovanjeLoaded = true;
      this.interesiLoaded = false;
      this.radnoIskustvoLoaded = false;
      this.institucijeLoaded = false;
    }else if(tab==="IN"){
      this.opcenitoLoaded = false;
      this.obrazovanjeLoaded = false;
      this.interesiLoaded = true;
      this.radnoIskustvoLoaded = false;
      this.institucijeLoaded = false;
    }else if(tab === "RI"){
      this.opcenitoLoaded = false;
      this.obrazovanjeLoaded = false;
      this.interesiLoaded = false;
      this.radnoIskustvoLoaded = true;
      this.institucijeLoaded = false;
    }else if(tab === "INSTI"){
      this.opcenitoLoaded = false;
      this.obrazovanjeLoaded = false;
      this.interesiLoaded = false;
      this.radnoIskustvoLoaded = false;
      this.institucijeLoaded = true;
    }else{
      this.opcenitoLoaded = false;
      this.obrazovanjeLoaded = false;
      this.interesiLoaded = false;
      this.radnoIskustvoLoaded = false;
      this.institucijeLoaded = false;
    }
  }
}
