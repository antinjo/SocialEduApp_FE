import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetExactProjectFolder, GetExactProjectFolderForSubject } from '../../../../feature/store/feature.action';
import { FeatureState } from '../../../../feature/store/feature.store';
import { PageEvent } from '../../../../feature/models/pageEvent.model';
import { SubmissionModel } from '../../../../feature/models/submission.model';
import { SubmissionFolderModel } from '../../../../feature/models/submissionFolder.model';
import { ProjectTaksModel } from '../../../../feature/models/projectTask.model';

@Component({
  selector: 'app-project-folder',
  templateUrl: './project-folder.component.html',
  styleUrl: './project-folder.component.scss'
})
export class ProjectFolderComponent {
  
  constructor(private store:Store){}

  @Input() tabName = ''
  @Input() subjectProject = false
  @Output() goBackFolder = new EventEmitter<boolean>();
  show:boolean = false;
  pageCount: number;
  folderLength:number;
  first: number = 0;
  rows: number = 20;
  exactProjectList:SubmissionModel[] = []
  id:string;

  @Select(FeatureState.getExactProjectList) exactProjectList$:Observable<SubmissionModel[]>;
  @Select(FeatureState.getExactProjectListForSubject) exactProjectListForSubject$:Observable<ProjectTaksModel[]>;
  @Select(FeatureState.getSubmissionsFolder) submissionsFolder$:Observable<SubmissionFolderModel[]>
  @Select(FeatureState.isLoadedProjects) isLoadedProjects$:Observable<boolean>
  
  ngOnInit(): void {
    this.submissionsFolder$.subscribe((res)=>{
      this.id = res.find(item => item.name === this.tabName)?.id
    })
    if(this.subjectProject){
      this.store.dispatch(new GetExactProjectFolderForSubject(this.id)).subscribe(()=>{
        this.exactProjectListForSubject$.subscribe((res)=>{
          this.exactProjectList = res.find(item => item.title === this.tabName)?.submissions
        })
      })
    }else{
      this.store.dispatch(new GetExactProjectFolder(this.id)).subscribe(() =>{
        this.exactProjectList$.subscribe((res)=>{
          this.exactProjectList =res
        })
      })
    }
  }
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
    this.pageCount = this.first + this.rows
  }

  goBack(){
    this.goBackFolder.emit(true)
  }
}
