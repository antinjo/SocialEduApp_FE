import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
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
import { FeatureState } from '../store/feature.store';
import { Select, Store } from '@ngxs/store';
import { AccessToken } from '../store/feature.action';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {


  constructor(private http:HttpClient, private store: Store) { }

  @Output() toggleEvent = new EventEmitter<boolean>()

  toggleClicked(bool:boolean){
    this.toggleEvent.emit(bool)
  }

  accessTokenHeader(token:string){
    let headers = new HttpHeaders();
    if(token === ""){
      token = localStorage.getItem('accessToken')
      this.store.dispatch(new AccessToken(token))
    }
    localStorage.setItem('accessToken',token)
    return headers.append('Authorization', 'Bearer ' + token);
  }

  getUserInfo(userEmail:string,token:string):Observable<UserModel>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.get<UserModel>(environment.link +"/api/Users/" + userEmail)
  }
  getSavedUsersInfo(id:string,token:string):Observable<SavedUserModel>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.get<SavedUserModel>(environment.link +"/api/SavedUsersFolders/" + id)
  }
  getSubjectForUser(email:string,token:string):Observable<SubjectModel[]>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.get<SubjectModel[]>(environment.link +"/api/subjects/foruser/" + email)
  }
  getSavedFoldersByUser(userEmail:string,token:string):Observable<SavedUserModel[]>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.get<SavedUserModel[]>(environment.link +"/api/SavedUsersFolders/foruser/" + userEmail)
  }
  getSavedFolder(id:string,token:string):Observable<SavedUserModel>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.get<SavedUserModel>(environment.link +"/api/SavedUsersFolders/"+ id)
  }
  getSubmissionsFolders(userEmail:string,token:string):Observable<SubmissionFolderModel[]>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.get<SubmissionFolderModel[]>(environment.link +"/api/submissionsfolders/foruser/" + userEmail)
  }
  getSubmissionFolder(id:string,token:string):Observable<SubmissionFolderModel>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.get<SubmissionFolderModel>(environment.link +"/api/submissionsfolders/" + id)
  }
  getInstitutions(token:string):Observable<InstitutionsModel[]>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.get<InstitutionsModel[]>(environment.link +"/api/institutions")
  }
    getInstitution(id:string,token:string):Observable<InstitutionsModel>{
    return this.http.get<InstitutionsModel>(environment.link +"/api/institutions/" + id)
  }
  getInstitutionSubject(id:string,token:string):Observable<SubjectModel[]>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.get<SubjectModel[]>(environment.link +"/api/subjects/forinstitution/" + id)
  }
  getSubjectList(token:string):Observable<SubjectModel[]>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.get<SubjectModel[]>(environment.link +"/api/subjects")
  }
  getSubjectInfo(id:string,token:string):Observable<SubjectModel>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.get<SubjectModel>(environment.link +"/api/subjects/" + id,{headers})
  }
  getPosts(email:string,token:string):Observable<PostModel[]>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.get<PostModel[]>(environment.link +"/api/Home/" + email)
  }
  postSubjectProject(newSubmission:SubmissionModel,token:string):Observable<SubmissionModel>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.post<SubmissionModel>(environment.link +"/api/projectsubmissions", newSubmission)
  }
  addProjectTask(newProjectTaks:ProjectTaksModel,token:string):Observable<ProjectTaksModel>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.post<ProjectTaksModel>(environment.link +"/api/projecttasks", newProjectTaks)
  }
  getChatMsg(email:string,token:string):Observable<ChatMessageModel[]>{
    let headers = new HttpHeaders();
    headers = this.accessTokenHeader(token)
    return this.http.get<ChatMessageModel[]>(environment.link +"/api/chats/foruser/" + email)
  }
}
