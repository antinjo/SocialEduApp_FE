import { Component, OnInit  } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FeatureState } from '../../../feature/store/feature.store';
import { Observable } from 'rxjs';
import { PostModel } from '../../../feature/models/post.model';
import { CommentModel } from '../../../feature/models/comment.model';
import { GetPosts } from '../../../feature/store/feature.action';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

    constructor(
      private store:Store,
      private router:Router,
      private route:ActivatedRoute 
      ){}

    posts:PostModel[];
    comments:CommentModel[];
    commentsOpen:boolean = false
    // TODO maknuti ovo kada BE postavi varijable u objekct Posta 
    likeClicked:boolean[] = [false,false,false,false,false];
    value!:string;
    index:number;

    @Select(FeatureState.getPost) posts$:Observable<PostModel[]>

  ngOnInit() {
    this.route.queryParams
    .subscribe((params)=>{
      this.store.dispatch(new GetPosts(params['userName'])).subscribe(()=>{
        this.posts$.subscribe((res)=>{
          console.warn("post",res); 
          this.posts = res

          for(const i of res){
              this.comments = i.comments
          }
      })
      });
    })
  }
  openComments(index){
    this.commentsOpen = !this.commentsOpen
    this.index = index;
  }

  likePost(index){
    this.likeClicked[index] = !this.likeClicked[index]
  }

  addComment(){
    this.comments.push({
      id:"",
      text:this.value,
      userEmail:"student@gmaill.com",
      userFirstName:"Mihael",
      userLastName:"Ladić",
      serImage:""
    })
    this.value = ""
  }

  goToPerson(email:string){
    this.router.navigate(['/userpage'],{queryParams: {userName: email }})
  }
}
