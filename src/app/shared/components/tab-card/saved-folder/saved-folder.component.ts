import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetExactFolder } from '../../../../feature/store/feature.action';
import { FeatureState } from '../../../../feature/store/feature.store';
import { Observable } from 'rxjs';
import { UserModel } from '../../../../feature/models/user.model';
import { PageEvent } from '../../../../feature/models/pageEvent.model';
import { SavedUserModel } from '../../../../feature/models/savedUsers.model';

@Component({
  selector: 'app-saved-folder',
  templateUrl: './saved-folder.component.html',
  styleUrl: './saved-folder.component.scss'
})
export class SavedFolderComponent implements OnInit {

  constructor(private store:Store){}

  @Input() tabName = ''
  @Output() goBackFolder = new EventEmitter<boolean>();
  show:boolean = false;
  pageCount: number;
  folderLength:number;
  first: number = 0;
  rows: number = 20;
  id:string;
  userList:UserModel[] = []
  
  @Select(FeatureState.getExtactUserList) exactUserList$:Observable<UserModel[]>;
  @Select(FeatureState.getSavedUsersFolder) getSavedUsersFolder$:Observable<SavedUserModel[]>
  @Select(FeatureState.isLoadedSaved) isLoadedSaved$:Observable<boolean>

  ngOnInit(): void {
    this.getSavedUsersFolder$.subscribe((res)=>{
      this.id = res.find(item => item.name ===this.tabName)?.id
    })
      this.store.dispatch(new GetExactFolder(this.id)).subscribe(()=>{
        this.exactUserList$.subscribe((res)=>{
          this.userList =res
        })
      })
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
