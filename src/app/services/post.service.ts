import {Subject} from 'rxjs';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { Post } from '../models/Post.model';
@Injectable()
@Injectable({
  providedIn: 'root'
})
export class PostService {
  TIMESTAMP: Object
  posts:Post[]=[];
  postsSubject=new Subject<Post[]>();
  constructor() { }

  emitPosts(){
    this.postsSubject.next(this.posts);
  }
  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }
  getPosts(){
    firebase.database().ref('/posts')
    .on('value',(data)=>{
      this.posts=data.val() ? data.val() : [];
      this.emitPosts();
    });
  }
  createNewPost(newpost:Post){
    this.posts.push(newpost);
    this.savePosts();
    this.emitPosts();
  }
  removePost(post:Post){
    const bookIndexRemove=this.posts.findIndex(
      (postEl) => {
        if(postEl === post){
          return true;
        }
      });
      this.posts.splice(bookIndexRemove,1);
      this.savePosts();
      this.emitPosts();
  }
  loveIt(post:Post){
    const bookIndexRemove=this.posts.findIndex(
      (postEl) => {
        if(postEl === post){
          return true;
        }
      });
      this.posts[bookIndexRemove].loveIts++;
      this.savePosts();
      this.emitPosts();
  }

  dontloveIt(post:Post){
    const bookIndexRemove=this.posts.findIndex(
      (postEl) => {
        if(postEl === post){
          return true;
        }
      });
      this.posts[bookIndexRemove].loveIts--;
      this.savePosts();
      this.emitPosts();
  }
}
