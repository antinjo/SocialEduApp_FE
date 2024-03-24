import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FeatureState } from '../../../../store/feature.store';
import { SubjectModel } from '../../../../models/subject.model';
import { ProjectTaksModel } from '../../../../models/projectTask.model';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-project-tab',
  templateUrl: './project-tab.component.html',
  styleUrl: './project-tab.component.scss',
  providers: [MessageService]
})
export class ProjectTabComponent implements OnInit{

  subjectInfo:SubjectModel;
  projectTasks: ProjectTaksModel[] = [];
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  @Select(FeatureState.getSubjectInfo) subjectInfo$:Observable<SubjectModel>

  ngOnInit(): void {
    this.subjectInfo$.subscribe((res)=>{
      this.subjectInfo =res
      if(this.subjectInfo.projectTasks){
        this.projectTasks = this.subjectInfo.projectTasks
      } 
    })
  }

  onUpload(event:UploadEvent) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    this.uploadedFiles.pop();
}
}
