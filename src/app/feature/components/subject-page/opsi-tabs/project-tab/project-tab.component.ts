import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FeatureState } from '../../../../store/feature.store';
import { SubjectModel } from '../../../../models/subject.model';
import { ProjectTaksModel } from '../../../../models/projectTask.model';
import { MessageService } from 'primeng/api';
import { SubmissionModel } from '../../../../models/submission.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomepageService } from '../../../../services/homepage.service';
import { GetSubjectInfo } from '../../../../store/feature.action';

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

  projectForm = new FormGroup({
    title:new FormControl(),
    description:new FormControl(),
  })
  projectTaskForm = new FormGroup({
      title:new FormControl (),
      description:new FormControl(),
      criteria: new FormControl(),
      maxGrade: new FormControl()
  })

  subjectInfo:SubjectModel;
  projectTasks: ProjectTaksModel[] = [];
  uploadedFiles: any[] = [];
  projectFolderOpen:boolean = false;
  openProjectFolder:boolean = true;
  folderName:string="";
  exactProjectList:SubmissionModel[] = []
  newProject:SubmissionModel ={
      id:null,
      subjectID:"",
      subjectName:"",
      userEmail: "",
      userFirstName:"",
      userLastName:"",
      title: "",
      description: "",
      link:"",
      imageLink:"",
      grade: 0,
      criteria:"",
      uploadDate: new Date
  };
  newProjectTask:ProjectTaksModel = {
    subjectID:"",
    title: "",
    description:"",
    createdDate: new Date,
    maxGrade: 0,
    criteria:"",
    submissions:[]
  };
  visible:boolean = false
  visiblePT:boolean = false

  constructor(
    private messageService: MessageService,
    private fb: FormBuilder,
    private homeService:HomepageService,
    private store: Store
    ) {}

  @Select(FeatureState.getSubjectInfo) subjectInfo$:Observable<SubjectModel>

  ngOnInit(): void {
    this.initForm();
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
  onSubmit(){
    this.subjectInfo$.subscribe((res)=>{
      this.subjectInfo =res
      this.newProject.subjectID = res.id
      this.newProject.subjectName = this.subjectInfo.name
      this.newProject.uploadDate = new Date
      this.newProject.userEmail = "student@gmaill.com"
      this.newProject.userFirstName = "Mihael"
      this.newProject.userLastName = "Ladic"
      this.newProject.description = this.projectForm.value.description
      this.newProject.title = this.projectForm.value.title
    })
    
    // this.homeService.postSubjectProject(this.newProject).subscribe(()=>{
    //   this.store.dispatch(new GetSubjectInfo(this.newProject.subjectID))
    // });
    this.visiblePT = false
    this.visible = false
  }
  onSubmitPT(){
    this.subjectInfo$.subscribe((res)=>{
      
    this.newProjectTask.subjectID = res.id
    this.newProjectTask.subject = res
    this.newProjectTask.title = this.projectTaskForm.value.title
    this.newProjectTask.description = this.projectTaskForm.value.description
    this.newProjectTask.criteria = this.projectTaskForm.value.criteria
    this.newProjectTask.maxGrade = this.projectTaskForm.value.maxGrade

    })
    this.visiblePT = false
    this.visible = false
    this.homeService.addProjectTask(this.newProjectTask).subscribe(()=>{
      this.store.dispatch(new GetSubjectInfo(this.newProject.subjectID))
    });
  }

  onOpenProjectFolder(name:string){
    this.projectFolderOpen = true;
    this.folderName = name;
  }
  onGoBackFromProject(bool:boolean){
    this.projectFolderOpen = !bool;
  }
  showDialog() {
    this.visible = true;
  }
  openProjectTaskAdd(){
    this.visiblePT=true
  }
  initForm() {
    this.projectForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.projectTaskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      criteria: ['', Validators.required],
      maxGrade: [0, Validators.required]
    });
  }
}
