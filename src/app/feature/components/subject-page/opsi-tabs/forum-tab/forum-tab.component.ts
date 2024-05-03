import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FeatureState } from '../../../../store/feature.store';
import { Observable } from 'rxjs';
import { SubjectModel } from '../../../../models/subject.model';
import { ForumModel } from '../../../../models/forum.model';
import { GetSubjectInfo, GetSubjectList } from '../../../../store/feature.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forum-tab',
  templateUrl: './forum-tab.component.html',
  styleUrl: './forum-tab.component.scss'
})
export class ForumTabComponent implements OnInit{

  constructor(
    private store:Store,
    private route:ActivatedRoute
    ){}

  subjectInfo:SubjectModel
  forums:ForumModel[] = [];
  openForum:boolean=false;
  forumName:string ="";
  id:string
  @Select(FeatureState.getSubjectInfo) subjectInfo$:Observable<SubjectModel>
  @Select(FeatureState.getSubjectList) subjectList$:Observable<SubjectModel[]>

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.store.dispatch(new GetSubjectList()).subscribe(()=>{
        this.subjectList$.subscribe((res)=>{
          this.id = res.find(item => item.abbreviation === params['subjectAbbr']).id
        })
      });
      this.subjectInfo$.subscribe((res)=>{
        console.warn("forum",res);
        
        this.subjectInfo =res
        if(this.subjectInfo.forums){
          this.forums = this.subjectInfo.forums
        } 
      })
  })

  }
  selectForum(name:string){
    this.openForum = true;
    this.forumName = name;
  }
  onGoBack(bool:boolean){
    this.openForum = !bool;
  }
}
