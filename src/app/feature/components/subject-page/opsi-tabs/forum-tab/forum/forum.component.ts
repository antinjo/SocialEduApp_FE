import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FeatureState } from '../../../../../store/feature.store';
import { ForumPostModel } from '../../../../../models/forumPost.model';
import { Observable } from 'rxjs';
import { ForumModel } from '../../../../../models/forum.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent implements OnInit{

  constructor(private store:Store){}

  @Input() tabName = "";
  @Output() goBackFolder = new EventEmitter<boolean>();

  forumPosts:ForumPostModel[] =[];

  @Select(FeatureState.getForumPosts) forumPosts$:Observable<ForumModel[]>;

  ngOnInit(): void {
      this.forumPosts$.subscribe((res)=>{
        this.forumPosts = (res.find(item => item.name ===this.tabName)).forumPosts
      })
  }

  goBack(){
    this.goBackFolder.emit(true)
  }
}
