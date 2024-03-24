import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SavedUserModel } from '../models/savedUsers.model';
import { UserModel } from '../models/user.model';
import { SubjectModel } from '../models/subject.model';
import { SubmissionFolderModel } from '../models/submissionFolder.model';
import { InstitutionsModel } from '../models/institution.model';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {


  constructor(private http:HttpClient) { }

  getUserInfo():Observable<UserModel>{
    return this.http.get<UserModel>("https://localhost:7107/api/Users/prof@gmaill.com")
  }
  getSavedUsersInfo():Observable<SavedUserModel>{
    return this.http.get<SavedUserModel>("https://localhost:7107/api/SavedUsersFolders/1")
  }
  getSubjectForUser():Observable<SubjectModel[]>{
    return this.http.get<SubjectModel[]>("https://localhost:7107/api/subjects/foruser/student@gmaill.com")
  }
  getSavedFoldersByUser():Observable<SavedUserModel[]>{
    return this.http.get<SavedUserModel[]>("https://localhost:7107/api/SavedUsersFolders/foruser/student@gmaill.com")
  }
  getSubmissionsFolders():Observable<SubmissionFolderModel[]>{
    return this.http.get<SubmissionFolderModel[]>("https://localhost:7107/api/submissionsfolders/foruser/student@gmaill.com")
  }
  getInstitutions():Observable<InstitutionsModel>{
    return this.http.get<InstitutionsModel>("https://localhost:7107/api/institutions/1")
  }
  getInstitutionSubject():Observable<SubjectModel[]>{
    return this.http.get<SubjectModel[]>("https://localhost:7107/api/subjects/forinstitution/1")
  }
  getSubjectInfo():Observable<SubjectModel>{
    return this.http.get<SubjectModel>("https://localhost:7107/api/subjects/1")
  }
}
