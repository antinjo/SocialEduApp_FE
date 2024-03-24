import { Component, OnInit  } from '@angular/core';
import { Select } from '@ngxs/store';
import { FeatureState } from '../../../../feature/store/feature.store';
import { Observable } from 'rxjs';
import { UserModel } from '../../../../feature/models/user.model';

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
  //TODO, user to UserModel, strings to []
  user:any;
  education:string[];
  experience:string[];
  interests:string[];;


  @Select(FeatureState.getUserInfo) user$:Observable<UserModel>

  ngOnInit(): void {
    this.education = ["string","string"];
    this.experience=["string","string"];
    this.interests=["string","string"];
      this.opcenitoLoaded = true;
      this.obrazovanjeLoaded = false;
      this.interesiLoaded = false;
      this.radnoIskustvoLoaded = false;
      this.user$.subscribe((res) => {
        this.user = res
        // this.education = res.education
        // this.experience = res.experience
        // this.interests = res.interests
      })
  }
  openTab(tab:string){
    if(tab==="OP"){
      this.opcenitoLoaded = true;
      this.obrazovanjeLoaded = false;
      this.interesiLoaded = false;
      this.radnoIskustvoLoaded = false;
    }else if(tab==="OB"){
      this.opcenitoLoaded = false;
      this.obrazovanjeLoaded = true;
      this.interesiLoaded = false;
      this.radnoIskustvoLoaded = false;
    }else if(tab==="IN"){
      this.opcenitoLoaded = false;
      this.obrazovanjeLoaded = false;
      this.interesiLoaded = true;
      this.radnoIskustvoLoaded = false;
    }else if(tab === "RI"){
      this.opcenitoLoaded = false;
      this.obrazovanjeLoaded = false;
      this.interesiLoaded = false;
      this.radnoIskustvoLoaded = true;
    }else{
      this.opcenitoLoaded = false;
      this.obrazovanjeLoaded = false;
      this.interesiLoaded = false;
      this.radnoIskustvoLoaded = false;
    }
  }

}
