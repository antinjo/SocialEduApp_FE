import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { SavedUserModel } from '../models/savedUsers.model';
import { UserModel } from '../models/user.model';
import { SubjectModel } from '../models/subject.model';
import { SubmissionFolderModel } from '../models/submissionFolder.model';
import { InstitutionsModel } from '../models/institution.model';
import { PostModel } from '../models/post.model';
import { environment } from '../../../environments/environment';
import { SubmissionModel } from '../models/submission.model';
import { ProjectTaksModel } from '../models/projectTask.model';
import { ChatMessageModel } from '../models/chatMsg.model';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {


  constructor(private http:HttpClient) { }

  @Output() toggleEvent = new EventEmitter<boolean>()

  toggleClicked(bool:boolean){
    this.toggleEvent.emit(bool)
  }

  getUserInfo(userEmail:string):Observable<UserModel>{
    return this.http.get<UserModel>(environment.link +"/api/Users/" + userEmail)
  }
  getSavedUsersInfo(id:string):Observable<SavedUserModel>{
    return this.http.get<SavedUserModel>(environment.link +"/api/SavedUsersFolders/" + id)
  }
  getSubjectForUser(email:string):Observable<SubjectModel[]>{
    return this.http.get<SubjectModel[]>(environment.link +"/api/subjects/foruser/" + email)
  }
  getSavedFoldersByUser(userEmail:string):Observable<SavedUserModel[]>{
    return this.http.get<SavedUserModel[]>(environment.link +"/api/SavedUsersFolders/foruser/" + userEmail)
  }
  getSavedFolder(id:string):Observable<SavedUserModel>{
    return this.http.get<SavedUserModel>(environment.link +"/api/SavedUsersFolders/"+ id)
  }
  getSubmissionsFolders(userEmail:string):Observable<SubmissionFolderModel[]>{
    return this.http.get<SubmissionFolderModel[]>(environment.link +"/api/submissionsfolders/foruser/" + userEmail)
  }
  getSubmissionFolder(id:string):Observable<SubmissionFolderModel>{
    return this.http.get<SubmissionFolderModel>(environment.link +"/api/submissionsfolders/" + id)
  }
  getInstitutions():Observable<InstitutionsModel[]>{
    return this.http.get<InstitutionsModel[]>(environment.link +"/api/institutions")
  }
    getInstitution(id:string):Observable<InstitutionsModel>{
    return this.http.get<InstitutionsModel>(environment.link +"/api/institutions/" + id)
  }
  getInstitutionSubject(id:string):Observable<SubjectModel[]>{
    return this.http.get<SubjectModel[]>(environment.link +"/api/subjects/forinstitution/" + id)
  }
  getSubjectList():Observable<SubjectModel[]>{
    return this.http.get<SubjectModel[]>(environment.link +"/api/subjects")
  }
  getSubjectInfo(id:string):Observable<SubjectModel>{
    return this.http.get<SubjectModel>(environment.link +"/api/subjects/" + id)
  }
  getPosts(email:string):Observable<PostModel[]>{
    return this.http.get<PostModel[]>(environment.link +"/api/Home/" + email)
  }
  postSubjectProject(newSubmission:SubmissionModel):Observable<SubmissionModel>{
    return this.http.post<SubmissionModel>(environment.link +"/api/projectsubmissions", newSubmission)
  }
  addProjectTask(newProjectTaks:ProjectTaksModel):Observable<ProjectTaksModel>{
    return this.http.post<ProjectTaksModel>(environment.link +"/api/projecttasks", newProjectTaks)
  }
  getChatMsg(email:string):Observable<ChatMessageModel[]>{
    return this.http.get<ChatMessageModel[]>(environment.link +"/api/chats/foruser/" + email)
  }
}
