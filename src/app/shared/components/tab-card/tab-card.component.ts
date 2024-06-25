import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SavedUserModel } from '../../../feature/models/savedUsers.model';
import { SubmissionFolderModel } from '../../../feature/models/submissionFolder.model';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FeatureState } from '../../../feature/store/feature.store';
import { InstitutionsModel } from '../../../feature/models/institution.model';
import { SubjectModel } from '../../../feature/models/subject.model';
import { PageEvent } from '../../../feature/models/pageEvent.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab-card',
  templateUrl: './tab-card.component.html',
  styleUrl: './tab-card.component.scss'
})
export class TabCardComponent implements OnInit{

    @Input() tabName = ''
    @Output() openSavedFolder = new EventEmitter<boolean>()
    @Output() nameoOfFolder = new EventEmitter<string>()
    @Output() openProjectFolder = new EventEmitter<boolean>()
    @Output() nameoOfProjectFolder = new EventEmitter<string>()
    
    show:boolean = false;
    pageCount: number;
    folderLength:number;
    first: number = 0;
    rows: number = 6;
    savedUsersFolder:SavedUserModel[];
    folderInfo:any;
    submissionFolder:SubmissionFolderModel[];
    institution: InstitutionsModel;
    institutionSubject: SubjectModel[];
    subjectInfo:SubjectModel;
    loggedInUser:string;

    constructor(private route:ActivatedRoute){}

    @Select(FeatureState.getSubjectForUser) folders$:Observable<SubjectModel[]>
    @Select(FeatureState.getSubmissionsFolder) submissionFolder$:Observable<SubmissionFolderModel[]>
    @Select(FeatureState.getInstitution) institution$:Observable<InstitutionsModel>
    @Select(FeatureState.getSubjectForInstitutions) institutionSubject$:Observable<SubjectModel[]>
    @Select(FeatureState.getSubjectInfo) subjectInfo$:Observable<SubjectModel>
    @Select(FeatureState.getSavedUsersFolder) savedUsersFolder$:Observable<SavedUserModel[]>
    @Select(FeatureState.isLoadedSaved) isLoadedSaved$:Observable<boolean>
    @Select(FeatureState.isLoadedProjects) isLoadedProjects$:Observable<boolean>
    @Select(FeatureState.isLoadedStudenti) isLoadedStudenti$:Observable<boolean>
    @Select(FeatureState.isLoadedSudionici) isLoadedSudionici$:Observable<boolean>
    @Select(FeatureState.isLoadedSubject) isLoadedSubject$:Observable<boolean>


    ngOnInit(): void {
      this.route.queryParams
      .subscribe(params => {
        this.loggedInUser = params['userName']
      })
        if(this.tabName === 'Saved'){
            this.savedUsersFolder$.subscribe((res)=>{
              this.folderInfo = res
              this.folderLength = this.folderInfo.length
            })
        }else if (this.tabName ==='Projekti'){
          this.submissionFolder$.subscribe((res) =>{
            this.folderInfo = res
            this.folderLength = this.folderInfo.length
          })
        }else if(this.tabName === 'Studenti'){
          this.institution$.subscribe((res)=>{
            this.institution = res
            this.folderInfo = this.institution.users
            this.folderLength = this.folderInfo.length
          })
        }else if(this.tabName === 'Kolegiji'){
          this.institutionSubject$.subscribe((res) =>{
            this.institutionSubject = res;
            this.folderInfo = res
            this.folderLength = this.folderInfo.length
          })
        }else if(this.tabName === 'Sudionici'){
          this.subjectInfo$.subscribe((res)=>{
            this.subjectInfo = res
            this.folderInfo = this.subjectInfo.users
            this.folderLength = this.folderInfo.length
          })
        }
        this.submissionFolder$.subscribe((res)=>{
          this.submissionFolder = res
        })
    }
    
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
    this.pageCount = this.first + this.rows
  }

  onOpenSavedFolder(name:string){
    this.openSavedFolder.emit(false)
    this.nameoOfFolder.emit(name)
  }

  onOpenProjectFolder(name:string){
    this.openProjectFolder.emit(false)
    this.nameoOfProjectFolder.emit(name)
  }
}
