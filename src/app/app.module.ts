import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NavbarComponent } from './navbar/navbar.component'; 
import { NotFoundComponent } from './not-found/not-found.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [
  {path : 'posts', component: PostListItemComponent},
  {path : 'newpost', component: NewPostComponent},
  {path : '', component: PostListItemComponent},
  {path : '**', component: NotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
