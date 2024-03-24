import { Component, Input, OnInit } from '@angular/core';
import * as Sub from '../../../../assets/submissionConfig.json'
import * as Pro from '../../../../assets/projectConfig.json'
import { SavedUserModel } from '../../../feature/models/savedUsers.model';
import { SubmissionFolderModel } from '../../../feature/models/submissionFolder.model';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FeatureState } from '../../../feature/store/feature.store';
import { InstitutionsModel } from '../../../feature/models/institution.model';
import { SubjectModel } from '../../../feature/models/subject.model';
interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
  }

@Component({
  selector: 'app-tab-card',
  templateUrl: './tab-card.component.html',
  styleUrl: './tab-card.component.scss'
})
export class TabCardComponent implements OnInit{

    @Input() tabName = ''
    show:boolean = false;
    pageCount: number;
    folderLength:number;
    first: number = 0;
    rows: number = 6;
    res2: SubmissionFolderModel[];
    res1: SavedUserModel[];
    folderInfo:any;
    submissionFolder:SubmissionFolderModel[];
    institution: InstitutionsModel;
    institutionSubject: SubjectModel[];
    subjectInfo:SubjectModel;

    @Select(FeatureState.getSubjectForUser) folders$:Observable<SavedUserModel[]>
    @Select(FeatureState.getSubmissionsFolder) submissionFolder$:Observable<SubmissionFolderModel[]>
    @Select(FeatureState.getInstitutions) institution$:Observable<InstitutionsModel>
    @Select(FeatureState.getSubjectForInstitutions) institutionSubject$:Observable<SubjectModel[]>
    @Select(FeatureState.getSubjectInfo) subjectInfo$:Observable<SubjectModel>

    ngOnInit(): void {
        this.res2 = (Sub as any).default;
        this.res1 = (Pro as any).default;
        if(this.tabName === 'Saved'){
            this.folderInfo = this.res1
            this.folderLength = this.folderInfo.length
        }else if (this.tabName ==='Projekti'){
            this.folderInfo = this.res2
            this.folderLength = this.folderInfo.length
        }else if(this.tabName === 'Studenti'){
          this.institution$.subscribe((res)=>{
            this.institution = res
            this.folderInfo = this.institution.users
            this.folderLength = this.folderInfo.length
          })
        }else if(this.tabName === 'Kolegij'){
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
        //TODO
          this.folders$.subscribe((res)=>{
            //this.folders = res
           //this.folderLengthF=this.folders.length
      })
    }
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
    this.pageCount = this.first + this.rows
  }
}
