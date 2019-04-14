import { PostService } from './../services/post.service';

import { Component,Input, OnInit } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

LoveIt:number=0;
DontLoveIT:number=0;
loveits:number=0;

  @Input() posts:Post[];  

  postsSubscription: Subscription;
    constructor(private postService:PostService, private router:Router) { }
    
    ngOnInit() {
      this.postsSubscription=this.postService.postsSubject.subscribe(
        (posts:Post[]) =>{
                 this.posts=posts;
      });
      this.postService.getPosts();
      this.postService.emitPosts();
    }
  
     ngOnDestroy(){
        this.postsSubscription.unsubscribe();
     }
      
  loveit(post:Post){
   this.postService.loveIt(post);
  }

  dontloveit(post:Post){
  this.postService.dontloveIt(post);
  }

  onDeletepost(post:Post){
    this.postService.removePost(post);
  }
}
